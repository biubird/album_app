var Album = require('../models/album');

module.exports = {
  index: function(req, res){
    Album.find('albums', {}, function(err, albums){
      if (err){
        res.json(err);
      } else {
        res.json(albums);
      }
    });
  }
}
