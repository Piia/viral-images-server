module.exports.getAll = function() {
	const axios = require('axios');
	const config = require('./config')

	const my_id = config.config_variables.client_id
	const my_url = 'https://api.imgur.com/3/gallery/hot/viral/day/0?showViral=true&mature=false&album_previews=false'


	const req = axios({
  		method:'get',
  		url: my_url,
  		headers: {'Authorization': 'Client-ID: ' + my_id}
	})

	return req
		.then(function(response) {
  			return response
		})
		.catch(function(error) {
			console.log("error in getAll in imgur")
			console.log(error)
		})

}