# Deploying PLUSQULEBI.GE on Coolify

This is a static site served by **nginx**. The `nginx.conf` reproduces what the
original Apache [`.htaccess`](.htaccess) did — gzip, long-term caching, security
headers (CSP/HSTS) and blocking of hidden files. (The `.htaccess` itself is no
longer used and is not shipped into the image.)

`lastTrans.json` (the "recent trades" feed) is **not** part of the repo or the
Docker image. It is served directly from a file on the host at
`/home/Valus/lastTrans.json`, bind-mounted into the container's web root
(`/usr/share/nginx/html/lastTrans.json`). This lets you update the trades feed on
the host without rebuilding or redeploying.

## Files added for deployment

| File                 | Purpose                                                             |
| -------------------- | ------------------------------------------------------------------- |
| `Dockerfile`         | `nginx:1.27-alpine`; loads `nginx.conf` and copies the static assets |
| `nginx.conf`         | gzip, caching, security headers, proxy-aware HTTPS redirect          |
| `docker-compose.yml` | Coolify deployment + host bind-mount for `lastTrans.json`           |
| `.dockerignore`      | Keeps build context lean                                            |
| `lastTrans.sample.json` | Example of the JSON shape the front end expects                  |

## One-time host setup (REQUIRED before the first deploy)

The bind mount source must exist **as a file** before the container starts. If it
does not, Docker will silently create a *directory* named `lastTrans.json` and the
feed will never load.

On the Coolify server, run:

```bash
sudo mkdir -p /home/Valus
# create the file with valid JSON (an empty array is fine to start)
echo '[]' | sudo tee /home/Valus/lastTrans.json
# make sure the container (and whatever updates the feed) can read it
sudo chmod 644 /home/Valus/lastTrans.json
```

The expected JSON shape (see `lastTrans.sample.json`):

```json
[
  { "name": "გიორგი მ.", "time": "2026-06-13 14:22", "plus": 1200, "gel": 3.3 }
]
```

Update the contents whenever you want — the change is picked up on the next request,
no redeploy needed.

## Deploy in Coolify

1. **New Resource → Docker Compose** (Git based), point it at this repository and
   branch (`main`). Coolify uses `docker-compose.yml`, which builds the `Dockerfile`.
2. Set the **Domain / FQDN** for the `web` service (e.g. `https://plusqulebi.ge`).
3. Enable **HTTPS / Let's Encrypt** (and "Force HTTPS"). Coolify's Traefik proxy
   terminates TLS and forwards `X-Forwarded-Proto`, which the `nginx.conf` HTTPS
   redirect keys off of (so there is no redirect loop).
4. **Deploy.**

The container exposes port **80**; Coolify's proxy routes the configured domain to it.

## Troubleshooting: "no available server"

This is Traefik's 503 — the domain route exists but it has no healthy backend to
forward to. For this compose deployment, check in order:

1. **Port not detected (most common for compose).** Traefik must know to use port
   80. The `SERVICE_FQDN_WEB_80` env var in `docker-compose.yml` declares this.
   Make sure the domain in the Coolify UI is `https://plusqulebi.ge` with **no
   `:80` suffix**, and that the app's port setting is `80`.
2. **Container unhealthy.** Traefik won't route to an unhealthy container. On the
   server: `docker ps --format "table {{.Names}}\t{{.Status}}"` — look for
   `(unhealthy)`. If so, inspect logs (`docker logs <name>`) or temporarily remove
   the `healthcheck:` block and redeploy to isolate it.
3. **Still starting / just redeployed.** The 503 is transient during the
   `start_period`; wait ~15s and retry.
4. **Domain / DNS.** Confirm the domain is spelled correctly in Coolify and its
   DNS A record points at the server IP.

## Local sanity check (optional)

```bash
# from the repo root
cp lastTrans.sample.json /tmp/lastTrans.json
docker build -t plusqulebi .
docker run --rm -p 8080:80 \
  -v /tmp/lastTrans.json:/usr/share/nginx/html/lastTrans.json:ro \
  plusqulebi
# open http://localhost:8080
```
