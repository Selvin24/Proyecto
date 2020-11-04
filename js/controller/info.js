app.controller('info', ['$scope','bridgeInfo', function($scope,bridgeInfo){
    bridgeInfo.success(function(data){
        $scope.bridgeInfo = data;
    })
}])