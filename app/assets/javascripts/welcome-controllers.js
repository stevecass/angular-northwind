
northwind.controller('MainController', ['$scope', '$filter', 'Category', 'Product', function($scope, $filter, Category, Product){
   $scope.data = {};

   Category.query(function(data){
    $scope.data.categories = data
   });

   Product.query(function(data){
    $scope.data.products = data
   });

   $scope.setCurrentCat = function(item) {
    $scope.current_cat_id = item.id;
   }

}]);



