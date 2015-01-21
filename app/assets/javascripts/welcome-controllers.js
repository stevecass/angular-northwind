
northwind.controller('MainController', ['$scope', 'Category', function($scope, Category){
   $scope.data = {};

   Category.query(function(data){
    $scope.data.categories = data
   });
}]);



