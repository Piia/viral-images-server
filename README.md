# viral-images-server

Node.js-backend that provides (hardcoded) metadata of most viral images on Imgur. 

## Install and run

```
npm install
json-server start --watch db.json --port 3010
npm run watch
```

Then either download, install and build viral-images-client and transfer created build-folder to this project's folder OR comment off ```app.use(express.static('build'))```.

Also, you need to make your own hardcoded metadata file db.json by requesting it from Imgur-API with Postman etc. Have fun!
