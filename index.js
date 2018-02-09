const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const imgur = require('./services/imgur')
const mongo = require('./services/mongo')

app.use(bodyParser.json())
app.use(cors())
 
const imgurSetup = function() { 
	imgur.getAll()
	 	.then(response => {
	    	console.log("index.js:imgurSetup .then happened")
	    	imgurData = response
	  	})
	  	.catch(error => {
	    	console.log("error in index.js: imgurSetup")
	  	});
}
let imgurData;
imgurSetup() 

/*
const mongoSetup = function() {
	mongo.pushAll(imgurData)
	.then(response => {
    	console.log("mongoSetup")
  	})
  	.catch(error => {
    	console.log("error in index.js: mongoSetup: mongo.pushAll")
  	});
}*/

app.get('/api/', (request, response) => {
	response.json(imgurData)
})

const port = process.env.PORT || 3002
app.listen(port)
console.log(`viral-images-server running on port ${port}`)