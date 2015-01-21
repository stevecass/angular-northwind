northwind.filter('matchesOn', function () {
  return function (items, field, value) {
    var filtered = [];
    if (items && field && value) {
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item[field] == value) {
          filtered.push(item);
        }
      }
    }
    return filtered;
  };
});