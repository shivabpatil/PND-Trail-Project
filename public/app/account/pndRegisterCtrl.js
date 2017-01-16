/**
* pndApp Modulecontroller('pndNavBarLoginCtrl')
*
* Description
*/
angular.module('pndApp').controller('pndRegisterCtrl',function ($scope,$location,authentication) {

  console.log('inside ctrl');
    // console.log('inside ctrl'+vm);
  $scope.user = {
    name : "",
    email : "",
    password : ""
  };

    $scope.onSubmit = function (user) {
    console.log(user);
    authentication
      .register(user)
      .error(function(err){
        alert(err);
      })
      .then(function(){
        //alert('it works');
        $location.path('profile');
      });
  };
})
