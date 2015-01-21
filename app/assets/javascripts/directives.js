northwind.directive('products', function () {
  return {
    restrict: 'E',
    scope: { products: "=", descriptor: "=" },
    templateUrl: "/ajs_templates/product.html"
  };
}); 