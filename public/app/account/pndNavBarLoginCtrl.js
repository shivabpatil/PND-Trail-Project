/**
* pndApp Modulecontroller('pndNavBarLoginCtrl')
*
* Description
*/
angular.module('pndApp').controller('pndNavBarLoginCtrl',function ($scope,$http,myIdentity,myNotifire,myAuth) {
	$scope.identity = myIdentity;
	$scope.signin = function (user) {
		myAuth.authenticateUser(user).then(function(success){
			if(success){
				myNotifire.notify('You have successfully loged in!!');
			}else{
				myNotifire.notify('User name & password combination incorrect!!');
			}
		});
	};	
})