# Deploying PLUSQULEBI.GE on Coolify

This is a static site served by Apache `httpd`. Apache is used (rather than nginx)
so the existing [`.htaccess`](.htaccess) — gzip, long-term caching, security
headers, MIME types and rewrites — keeps working unchanged.

`lastTrans.json` (the "recent trades" feed) is **not** part of the repo or the
Docker image. It is served directly from a file on the host at
`/home/Valus/lastTrans.json`, bind-mounted into the container's web root. This
lets you update the trades feed on the host without rebuilding or redeploying.

## Files added for deployment

| File                 | Purpose                                                             |
| -------------------- | ------------------------------------------------------------------- |
| `Dockerfile`         | Apache `httpd:2.4-alpine`, enables required modules, copies the site |
| `docker-compose.yml` | Coolify deployment + host bind-mount for `lastTrans.json`           |
| `.dockerignore`      | Keeps build artifacts/config out of the image                       |
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
   terminates TLS and forwards `X-Forwarded-Proto`, which the `.htaccess` HTTPS
   redirect now keys off of (so there is no redirect loop).
4. **Deploy.**

The container exposes port **80**; Coolify's proxy routes the configured domain to it.

## Local sanity check (optional)

```bash
# from the repo root
cp lastTrans.sample.json /tmp/lastTrans.json
docker build -t plusqulebi .
docker run --rm -p 8080:80 \
  -v /tmp/lastTrans.json:/usr/local/apache2/htdocs/lastTrans.json:ro \
  plusqulebi
# open http://localhost:8080
```
