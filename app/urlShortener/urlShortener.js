'use strict';

angular.module('myApp.urlShortener', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/urlShortener', {
    templateUrl: 'urlShortener/urlShortener.html',
    controller: 'UrlShortener'
  });
}])

.controller('UrlShortener', ['$scope', '$http', function($scope, $http) {

  // TODO: implement submit function
  $scope.submit = function () {

  }

  // TODO: implement reset function
  $scope.reset = function () {

  }
}]);
