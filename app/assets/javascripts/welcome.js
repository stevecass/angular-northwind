// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var northwind = angular.module('northwind', []);

northwind.controller('MainController', ['$scope', function($scope){
   $scope.data = {};
   $scope.data.items = ['apple', 'banana', 'cherry'];
}]);