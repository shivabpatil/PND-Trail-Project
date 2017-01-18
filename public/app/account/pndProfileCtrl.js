/**
* pndApp Modulecontroller('pndNavBarLoginCtrl')
*
* Description
*/
angular.module('pndApp').controller('pndProfileCtrl',function ($scope,$location,userData,authentication) {

  console.log('inside ctrl');
    // console.log('inside ctrl'+vm);
  $scope.user = {};
   userData.getUsers()
    .success(function(data){
        $scope.users = data;
    })
    .error(function (e) {
      console.log(e);
    });
   userData.getProfile()
    .success(function(data) {
      $scope.user = data;
    })
    .error(function (e) {
      console.log(e);
    });

  $scope.logOut = function(){
    authentication.logout();
    $location.path('/');
  }

})
