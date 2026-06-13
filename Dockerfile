# PLUSQULEBI.GE — static site served by nginx
FROM nginx:1.27-alpine

# Site config (gzip, caching, security headers, HTTPS redirect) replaces the default.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Ship only the static assets. Copying paths explicitly keeps config files
# (nginx.conf, Dockerfile, .htaccess, ...) out of the served web root.
# lastTrans.json is intentionally NOT copied — the live feed lives on the host
# at /home/Valux/lastTrans.json, mounted into the container, and the symlink
# below surfaces it at the web root.
COPY index.html manifest.json robots.txt sitemap.xml /usr/share/nginx/html/
COPY css/   /usr/share/nginx/html/css/
COPY js/    /usr/share/nginx/html/js/
COPY fonts/ /usr/share/nginx/html/fonts/
COPY img/   /usr/share/nginx/html/img/

# Point the web root's lastTrans.json at the host-mounted feed file. The target is
# resolved at request time, so it only needs to exist in the running container
# (via the mount), not at build time. nginx follows symlinks by default.
RUN ln -s /home/Valux/lastTrans.json /usr/share/nginx/html/lastTrans.json

EXPOSE 80
