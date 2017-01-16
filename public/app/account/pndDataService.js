angular.module('pndApp.pndDataService',[])
  .service('userData',['$http','authentication',function($http,authentication){

    var getProfile = function () {
      return $http.get('/api/profile', {
        headers: {
          Authorization: 'Bearer '+ authentication.getToken()
        }
      });
    };

    return {
      getProfile : getProfile
    };

  }]);
