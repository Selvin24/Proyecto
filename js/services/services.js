app.factory('services', function ($http) {
    return $http.get('./js/services/info.json')
    .success(function(data) {
      return data;
    })
    .error(function(data) {
      return data;
    });
});
