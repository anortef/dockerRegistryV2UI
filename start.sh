#!/usr/bin/env bash
sed -i 's/REGISTRY_URL/'"$REGISTRY_URL"'/g' app/app.js
npm start
