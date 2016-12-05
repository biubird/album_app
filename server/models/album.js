var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AlbumSchema = new Schema({
  title: String,
  image: String,
  imgUrl: String,
  year: String,
  songs: [{type: String}]},
  {collection: 'albums'});

module.exports = mongoose.model("album", AlbumSchema, 'albums');
