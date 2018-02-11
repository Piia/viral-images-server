const mongoose = require('mongoose')
const url = 'localhost:/27017'

//mongoose.connect(url)

/*TODO

- schema
- data in, data out
- search

*/

/*
const schema = new mongoose.Schema({
  data: String
})

const Metadata = mongoose.model('Metadata', schema);

const data = new Metadata({
    data: "raw"
    })

data
  .save()
  .then(response => {
    console.log("mongo.js:save response", response)
    mongoose.connection.close() 
  })

*/