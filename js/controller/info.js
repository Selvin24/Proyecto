// app.controller('info', function ($scope, $http,$routeParams) {
//   $http.get('./js/services/info.json').then(function (response) {
//        $scope.puentes = response.data.puentes;
//   });
// });

app.controller('info', ['$scope', 'services', '$routeParams', function($scope, services, $routeParams) {
  services.success(function(data) {
    $scope.puentes = data[$routeParams.id];
  });
}]);
