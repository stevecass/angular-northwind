northwind.filter('matchesOn', function () {
  return function (items, fieldName, valueToMatch) {
    var filtered = [];
    if (items && fieldName && valueToMatch) {
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item[fieldName] == valueToMatch) {
          filtered.push(item);
        }
      }
    }
    return filtered;
  };
});