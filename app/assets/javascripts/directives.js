northwind.directive('products', function () {
  return {
    restrict: 'E',
    scope: { 
      products: "=",
      descriptor: "=" ,
      updateprodlist: '&'
    },
    templateUrl: "/ajs_templates/product.html"
  };
}); 