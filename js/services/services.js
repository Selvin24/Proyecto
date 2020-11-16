app.factory('services', function ($http) {
    // return {
    //     obtenerpuentes: function () {
    //         var oPromise = $http.get('./js/services/info.json').then(function (response) {
    //             return response.data;
    //         });
    //         return oPromise;
    //     }
    // };

    // return $http.get('./js/services/info.json');
    // var obj = {content:null};
    // $http.get('./js/services/info.json').success(function(data) {
    //     obj.content = data;
    // });    

    // return obj;    

    return $http.get('./js/services/info.json')
    .success(function(data) {
      return data;
    })
    .error(function(data) {
      return data;
    });
});
