FROM fedora:latest
MAINTAINER Adrián Norte

ENV REGISTRY_URL http://localhost:5000

RUN mkdir -p /srv/v2ui
WORKDIR /var/www

ADD package.json package.json
ADD bower.json bower.json
ADD .bowerrc .bowerrc

RUN dnf install -y git nodejs npm nginx
RUN npm install -g bower
RUN npm install
RUN bower install --allow-root

ADD app/app.css app/
ADD app/app.js app/
ADD app/index.html app/
ADD nginx.conf /etc/nginx/nginx.conf

ADD start.sh start.sh
RUN chmod +x start.sh

CMD ./start.sh
