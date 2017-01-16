/**
* pndApp Modulecontroller('pndNavBarLoginCtrl')
*
* Description
*/
angular.module('pndApp').controller('pndLoginCtrl',function ($scope,$location,authentication) {


    $scope.user = {
      email : "",
      password : ""
    };

    $scope.onSubmit = function (user) {
      authentication
        .login(user)
        .error(function(err){
          alert(err);
        })
        .then(function(){
					//alert('it works');
          $location.path('profile');
        });
    };
})
