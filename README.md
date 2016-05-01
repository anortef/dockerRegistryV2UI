A little project to learn AngularJS while creating a little UI 
for a docker registry V2.

Usage: 

docker run -d -e REGISTRY_URL=http://IP_OF_YOUR_REGISTRY:5000 -p 0.0.0.0:8000:80 --name v2ui anortef/dockerregistryv2ui
