app.controller('info', ['$scope', 'services', '$routeParams', function($scope, services, $routeParams) {
  services.success(function(data) {
    $scope.puentes = data[$routeParams.id];
  });
}]);
