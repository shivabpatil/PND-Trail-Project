angular.module('pndApp.pndAuthenticationService',[])
  .service('authentication',['$http','$window',function($http,$window){
    var saveToken = function (token) {
      if($window.localStorage['mean-token']){
        $window.localStorage.removeItem('mean-token');
      }
      $window.localStorage['mean-token'] = token;
    };

    var getToken = function () {
      return $window.localStorage['mean-token'];
    };

    var isLoggedIn = function() {
      var token = getToken();
      var payload;

      if(token){
        payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);

        return payload.exp > Date.now() / 1000;
      } else {
        return false;
      }
    };

    var currentUser = function() {
      if(isLoggedIn()){
        var token = getToken();
        var payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);
        return {
          email : payload.email,
          name : payload.name,
          role:payload.role
        };
      }
    };

    isAdmin = function(){
      if(isLoggedIn()){
        var token = getToken();
        var payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);
        if(payload.role.indexOf('admin')>-1){
          return true;
        }
        else{
          return false;
        }
      }
      return false;
    };

    isEmployee = function(){
      if(isLoggedIn()){
        var token = getToken();
        var payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);
        if(payload.role.indexOf('employee')>-1){
          return true;
        }
        else{
          return false;
        }
      }
      return false;
    };
    register = function(user) {
      return $http.post('/api/register', user).success(function(data){
        saveToken(data.token);
      });
    };

    login = function(user) {
      return $http.post('/api/login', user).success(function(data) {
        saveToken(data.token);
      });
    };
    // function to edit the username,emial nad password
    editUser = function (user) {
        var token = getToken();
        var payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);
        return $http.put('/api/user/'+payload._id,user).success(function(data) {
          console.log(data);
          saveToken(data.token);
        });
    }
    // function to edit user role
    editRole = function (user) {
        // var token = getToken();
        // var payload = token.split('.')[1];
        // payload = $window.atob(payload);
        // payload = JSON.parse(payload);
        console.log('inside editrole');
        return $http.patch('/api/user/'+user._id,user).success(function(data) {
          console.log(data);
        });
    }
    logout = function() {
      $window.localStorage.removeItem('mean-token');
    };

    return {
      currentUser : currentUser,
      saveToken : saveToken,
      getToken : getToken,
      isLoggedIn : isLoggedIn,
      register : register,
      login : login,
      logout : logout,
      isAdmin : isAdmin,
      isEmployee : isEmployee,
      editUser : editUser,
      editRole : editRole
    };
  }]);
