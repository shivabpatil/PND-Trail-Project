/**
* pndApp Modulecontroller('pndNavBarLoginCtrl')
*
* Description
*/
angular.module('pndApp').controller('pndLoginCtrl',function ($scope,$http, myAuth, myNotifire) {
	$scope.loginUser = function(user){
		console.log(user);
	}

	$scope.signupUser = function(user){
		console.log(user);
	}

	$scope.loggedUser = {
		profile:{
			name:'Abcd',
			picture:'',
		},
		email:'abcd@def.com',
		address:'Test address',

	}

		$scope.updateUser = function(updateUser){
			console.log(updateUser);
		}
})
