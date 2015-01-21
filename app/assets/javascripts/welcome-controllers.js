
northwind.controller('MainController', ['$scope', '$filter', 'Category', 'Product', function($scope, $filter, Category, Product){
   $scope.data = {};

   Category.query(function(data){
    $scope.data.categories = data
   });

   Product.query(function(data){
    $scope.data.products = data
   });

   $scope.setCurrentCat = function(item) {
    $scope.current_cat = item;
   }

   $scope.stockLevelClass = function(item) {
      return item.units_in_stock < item.reorder_level ? "stock_level_danger" : "stock_level_ok";

   }

}]);



