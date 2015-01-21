// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var northwind = angular.module('northwind', ['ngResource']);

northwind.factory('Category', function($resource) {
  return $resource('/api/categories/:id'); // Note the full endpoint address
});

northwind.controller('MainController', ['$scope', 'Category', function($scope, Category){
   $scope.data = {};

   Category.query(function(data){
    $scope.data.categories = data
   });
}]);



