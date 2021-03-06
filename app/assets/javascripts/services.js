northwind.factory('Category', function($resource) {   return $resource('/api/categories/:id');  });
northwind.factory('Customer', function($resource) {   return $resource('/api/customers/:id');  });
northwind.factory('Employee', function($resource) {   return $resource('/api/employees/:id');  });
northwind.factory('OrderDetail', function($resource) {   return $resource('/api/order_details/:id');  });
northwind.factory('Order', function($resource) {   return $resource('/api/orders/:id');  });
northwind.factory('Product', function($resource) {   return $resource('/api/products/:id');  });
northwind.factory('Shipper', function($resource) {   return $resource('/api/shippers/:id');  });
northwind.factory('Supplier', function($resource) {   return $resource('/api/suppliers/:id');  });

northwind.factory('FinderService', ['$http', function($http){
  var service = {
    search: function(what, field, val, exact) {
    var s = '/api/find/' + Array.prototype.join.call(arguments, "/");
    var promise = $http.get(s).then(function(response){
      return response.data;
    });
    return promise;
    }
  };
  return service;
}]);

northwind.factory('OrderService', ['$http', function($http){
  var service = {
    ordersForProduct: function(pid) {
    var s = '/api/orders/for/' + pid;
    var promise = $http.get(s).then(function(response){
      return response.data;
    });
    return promise;
    }
  };
  return service;
}]);
