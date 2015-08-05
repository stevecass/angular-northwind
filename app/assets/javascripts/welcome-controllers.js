northwind.controller('MainController', 
  ['$scope', '$filter', 'Category', 'Product', 'FinderService', 'OrderService',
  function($scope, $filter, Category, Product, FinderService, OrderService){
  $scope.data = {};

  $scope.loadCategories = function() {
    Category.query(function(data){
      $scope.data.categories = data;
    });
  };

  $scope.loadCategories();

  Product.query(function(data){
    $scope.data.products = data;
  });

  $scope.setCurrentCat = function(item) {
    $scope.products_to_show = $filter('matchesOn')($scope.data.products, 'category_id', item.id);
    $scope.product_list_descriptor = item.category_name;
    $scope.current_orders = null;
  };

  $scope.stockLevelClass = function(item) {
    return item.units_in_stock < item.reorder_level ? "stock_level_danger" : "stock_level_ok";
  };

  $scope.search = function(what, field, val, exact) {
    FinderService.search(what, field, val, exact).then(function(data){
      $scope.search_results = data;
    });
  };

  $scope.ordersFor = function(product) {
    OrderService.ordersForProduct(product.id).then(function(data){
      $scope.current_orders = data;
      $scope.current_product = product;
      if ($scope.current_orders.length > 0) {
        $scope.updateCustomer($scope.current_orders[0]);
      }
    });
  };

  $scope.findProductsFromSearch = function() {
    var txtToMatch = $scope.search_text;
    var sourceArray = $scope.data.products ;
    $scope.products_to_show = $filter('contains')(sourceArray, 'product_name', txtToMatch);
    $scope.product_list_descriptor = $scope.search_text;
    $scope.current_orders = null;
  };

  $scope.updateCustomer = function(order) {
    $scope.cust_to_display = order.customer;
    $scope.order_detail_to_display = order.order_details;
  };

  $scope.saveNewCategory = function() {
    var newCat = new Category();
    newCat.category_name = $scope.new_category_name;
    newCat.$save().then(function(){
      $scope.loadCategories();
    });
  };

}]);



