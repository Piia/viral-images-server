const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const data = require('./services/data')
const cors = require('cors')
const imgur = require('./services/imgur')

app.use(bodyParser.json())
app.use(cors())

const mockData = data.data

 
let imgurData = imgur.getAll()
 	.then(response => {
    	console.log(response);
  	})
  	.catch(error => {
    	console.log("error in index.js: imgurData");
  	});

app.get('/api/', (request, response) => {
  	response.json(mockData)
})

const port = process.env.PORT || 3002
app.listen(port)
console.log(`viral-images-server running on port ${port}`)