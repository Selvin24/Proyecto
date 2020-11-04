app.factory('bridgeInfo', ['$http', function ($http) {
    return $http.get('https://1drv.ms/u/s!Ai15NKjs0k_Ut2VnRJP-4-m7gseU?e=HS7tSD')
        .success(function (data) {
            return data;
        })
        .error(function (data) {
            return data;
        });
}]);
