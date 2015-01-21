
northwind.controller('MainController', ['$scope', '$filter', 'Category', 'Product', 'finderService', 'orderService', function($scope, $filter, Category, Product, finderService, orderService){
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
    console.log(product);
    orderService.ordersForProduct(product.id).then(function(data){
      $scope.current_orders = data;
    });
    

  }


}]);



