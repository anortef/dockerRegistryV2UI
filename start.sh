#!/usr/bin/env bash
sed -i 's@%REGISTRY_URL%@'$REGISTRY_URL'@g' /etc/nginx/nginx.conf
s6-svc -h /var/run/s6/services/nginx
tail -f /var/log/nginx/access.log
