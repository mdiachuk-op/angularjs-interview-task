'use strict';

angular.module('myApp.urlShortener', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/urlShortener', {
    templateUrl: 'urlShortener/urlShortener.html',
    controller: 'UrlShortener'
  });
}])

.controller('UrlShortener', ['$scope', function($scope) {

  // TODO: implement submit function

}]);
