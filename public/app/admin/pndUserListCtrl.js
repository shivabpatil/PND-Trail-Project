/**
* pndApp Modulecontroller('pndNavBarLoginCtrl')
*
* Description
*/
angular.module('pndApp').controller('pndUserListCtrl',function ($scope,$location,userData,authentication) {

  console.log('inside ctrl');
  $scope.roles = ['admin','caller','employee']
    // console.log('inside ctrl'+vm);
  $scope.user = {};
   userData.getUsers()
    .success(function(data){
        $scope.users = data;
        console.log($scope.users );
    })
    .error(function (e) {
      console.log(e);
    });
   userData.getProfile()
    .success(function(data) {
      $scope.currentUser = data;
    })
    .error(function (e) {
      console.log(e);
    });


  $scope.onSubmit = function (user,userRole) {
    console.log('inside patch');
    user.role=[userRole];
    console.log(user);
    authentication
      .editRole(user)
      .error(function(err){
        alert(err);
      })
      .then(function(){
        alert('we rock')
        //$location.path('/');
      });
  }

})
