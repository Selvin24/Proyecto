app.controller('bridges', function ($scope, $http) {
     $http.get('./js/services/info.json').then(function (response) {
          $scope.myData = response.data;
          
          $scope.categoryFun = function(index) {
               $scope.category = $scope.myData[index].categoria;     
           }
     });
});