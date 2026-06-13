# PLUSQULEBI.GE — static site served by nginx
FROM nginx:1.27-alpine

# Site config (gzip, caching, security headers, HTTPS redirect) replaces the default.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Ship only the static assets. Copying paths explicitly keeps config files
# (nginx.conf, Dockerfile, .htaccess, ...) out of the served web root.
# lastTrans.json is intentionally NOT copied — it is bind-mounted from the host
# at runtime (see docker-compose.yml).
COPY index.html manifest.json robots.txt sitemap.xml /usr/share/nginx/html/
COPY css/   /usr/share/nginx/html/css/
COPY js/    /usr/share/nginx/html/js/
COPY fonts/ /usr/share/nginx/html/fonts/
COPY img/   /usr/share/nginx/html/img/

EXPOSE 80
