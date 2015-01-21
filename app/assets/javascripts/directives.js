northwind.directive('products', function () {
  return {
    restrict: 'E',
    scope: { 
      products: "=",
      descriptor: "=" ,
      updateprodlist: '&',
      setStockLevelClass: '&'
    },
    templateUrl: "/ajs_templates/product.html"
  };
});

northwind.directive('orders', function () {
  return {
    restrict: 'E',
    scope: {
      orders: "=",
    },
    templateUrl: "/ajs_templates/order_table.html"
  };
}); 