/**
* pndApp Modulecontroller('pndNavBarLoginCtrl')
*
* Description
*/
angular.module('pndApp').controller('pndNavBarLoginCtrl',function ($scope,$location, authentication) {

	$scope.isLoggedIn = authentication.isLoggedIn();
	$scope.currentUser = authentication.currentUser();
	//$scope.identity = myIdentity;
	// $scope.signin = function (user) {
	// 	myAuth.authenticateUser(user).then(function(success) {
  //           myNotifire.notify('You have successfully loged in!!');
  //       }, function(error) {
  //           myNotifire.errorNotify('User name & password combination incorrect!!');
  //       });
	// }

})
