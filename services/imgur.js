module.exports.getAll = function() {
	const axios = require('axios');
	const config = require('./config')

	const my_id = config.config_variables.client_id

	//responses with 403... but it works in Postman!!! and headers are ok... 
	//const imgur_url = 'https://api.imgur.com/3/gallery/hot/viral/day/0?showViral=true&mature=false&album_previews=false'
	
	//json-server
	const imgur_url = 'http://localhost:3010/data' 

	const req = axios.get(imgur_url, {
  		headers: {'Authorization': 'Client-ID: ' + my_id} })

	return req
		.then(function(response) {
  			return response.data
		})
		.catch(function(error) {
			console.log("error in imgur.js:getAll request")
			console.log(error)
		})

}


