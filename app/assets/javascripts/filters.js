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

northwind.filter('contains', function () {
  return function (items, fieldName, valueToMatch) {
    var filtered = [];
    if (items && fieldName && valueToMatch) {
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item[fieldName].toLowerCase().indexOf(valueToMatch.toLowerCase()) >-1) {
          filtered.push(item);
        }
      }
    }
    return filtered;
  };
});