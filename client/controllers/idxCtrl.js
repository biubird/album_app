App.controller('IndexController', function($scope, albumFactory){
  $scope.albums = [];

  function getAlbums(){
    albumFactory.getAlbums()
    .then( function(serverResponse){
      $scope.albums = serverResponse.data;
    })
  }
  getAlbums();
})
