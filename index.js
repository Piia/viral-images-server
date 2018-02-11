const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const imgur = require('./services/imgur')
const mongo = require('./services/mongo')

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('build'))
 
const imgurInit = function() { 
	imgur.getAll()
	 	.then(response => {
	    	console.log("index.js:imgurInit succeeded")
	    	imgurData = response
	  	})
	  	.catch(error => {
	    	console.log("error in index.js: imgurInit")
	  	});
}
let imgurData;
imgurInit() 


/*
const mongoInit = function() {
	mongo.pushAll(imgurData)
	.then(response => {
    	console.log("index.js:mongoInit succeeded")
  	})
  	.catch(error => {
    	console.log("error in index.js: mongoInit: in call mongo.pushAll")
  	});
}
mongoInit()
*/

app.get('/api/', (request, response) => {
	response.json(imgurData)
})

const port = process.env.PORT || 3002
app.listen(port)
console.log(`viral-images-server running on port ${port}`)