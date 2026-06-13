# PLUSQULEBI.GE — static site served by Apache httpd
# Apache is used (instead of nginx) so the existing .htaccess
# (gzip, caching, security headers, MIME types, rewrites) works as-is.
FROM httpd:2.4-alpine

# Enable the Apache modules the .htaccess relies on.
# These ship with the image but are commented out by default.
RUN sed -i \
    -e 's|^#\(LoadModule rewrite_module .*\)|\1|' \
    -e 's|^#\(LoadModule deflate_module .*\)|\1|' \
    -e 's|^#\(LoadModule expires_module .*\)|\1|' \
    -e 's|^#\(LoadModule headers_module .*\)|\1|' \
    /usr/local/apache2/conf/httpd.conf

# Allow per-directory .htaccess overrides in the document root, disable directory
# listing, and silence the "fully qualified domain name" startup warning.
RUN cat >> /usr/local/apache2/conf/httpd.conf <<'EOF'

ServerName localhost

<Directory "/usr/local/apache2/htdocs">
    Options FollowSymLinks
    AllowOverride All
    Require all granted
</Directory>
EOF

# Ship the static site. lastTrans.json is intentionally NOT copied in —
# it is bind-mounted from the host at runtime (see docker-compose.yml).
COPY . /usr/local/apache2/htdocs/

EXPOSE 80
