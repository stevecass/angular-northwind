northwind.factory('Category', function($resource) {
  return $resource('/api/categories/:id'); // Note the full endpoint address
});

