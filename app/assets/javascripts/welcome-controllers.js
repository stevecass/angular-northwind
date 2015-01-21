
northwind.controller('MainController', ['$scope', '$filter', 'Category', 'Product', 'finderService', function($scope, $filter, Category, Product, finderService){
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

  $scope.search = function(what, field, val, exact) {
    finderService.search(what, field, val, exact).then(function(data){
      $scope.search_results = data;
    });
  }

  $scope.ordersFor = function(product) {
    $scope.search('order_details', 'product_id', product.id, 'T');

  }


}]);



