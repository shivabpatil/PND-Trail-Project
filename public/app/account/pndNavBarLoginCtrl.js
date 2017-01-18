/**
* pndApp Modulecontroller('pndNavBarLoginCtrl')
*
* Description
*/
angular.module('pndApp').controller('pndNavBarLoginCtrl',function ($scope,$location,$window,$route,authentication,myNotifire) {
  $scope.user = {
		email : "",
		password : ""
	};
	$scope.isLoggedIn = authentication.isLoggedIn();
	$scope.currentUser = authentication.currentUser();
  $scope.admin = authentication.isAdmin();
  $scope.employee = authentication.isEmployee();
  console.log($scope.currentUser);
	$scope.onSubmit = function (user) {
		authentication
			.login(user)
			.error(function(err){
				console.log(err);
				myNotifire.notify(err.message);
			})
			.then(function(){
				myNotifire.notify('You have successfully loged in!!');
        $scope.isLoggedIn = authentication.isLoggedIn();
				$route.reload();
			});
	};

	//$scope.identity = myIdentity;
	// $scope.signin = function (user) {
	// 	myAuth.authenticateUser(user).then(function(success) {
  //           myNotifire.notify('You have successfully loged in!!');
  //       }, function(error) {
  //           myNotifire.errorNotify('User name & password combination incorrect!!');
  //       });
	// }
	//
  $scope.logOut = function(){
	  authentication.logout();
		$scope.isLoggedIn = authentication.isLoggedIn();
		$scope.currentUser = authentication.currentUser();
		myNotifire.notify('You have successfully loged out!!');
		$scope.user={};
    $route.reload();
	  // $location.path('/');
	}

})
