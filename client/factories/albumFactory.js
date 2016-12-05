App.factory('albumFactory', function($http){
  var factory = {};

  factory.getAlbums = function(albums){
    return $http.get('/albums', albums)
  }
  return factory;
});
