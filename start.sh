#!/usr/bin/env bash
sed -i 's@%REGISTRY_URL%@'$REGISTRY_URL'@g' /etc/nginx/nginx.conf
nginx -g "daemon off;"
