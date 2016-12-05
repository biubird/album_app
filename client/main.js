var App = angular.module('albumModule', ['ngRoute']);

App.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/partials/_index.html',
    controller: 'IndexController'
  })
  .otherwise({
    redirectTo: '/'
  })
})
