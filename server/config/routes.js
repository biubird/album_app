var Album = require('../controllers/albums')

module.exports = function(app){
  app.get('/', function(req, res){
    res.sendFile(__dirname + '../../client/index.html');
  });
  app.get('/albums', Album.index);
}
