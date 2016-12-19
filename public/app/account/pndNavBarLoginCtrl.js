/**
* pndApp Modulecontroller('pndNavBarLoginCtrl')
*
* Description
*/
angular.module('pndApp').controller('pndNavBarLoginCtrl',function ($scope,$http) {
	//$scope.identity = myIdentity;
	$scope.signin = function (username,password) {
		console.log(username);
		console.log(password);
		// $http.post('/auth/login',{username:username,password:password}).then(function(response){
		// 	console.log(response.data);
		// 	if(response.data.success){
		// 		console.log('sucess')
		// 	}
		// 	else{
		// 		console.log('fail')
		// 	}
		// myAuth.authenticateUser(user).then(function(success){
		// 	if(success){
		// 		myNotifire.notify('You have successfully loged in!!');
		// 	}else{
		// 		myNotifire.notify('User name & password combination incorrect!!');
		// 	}
		// });


	//})	
}
})