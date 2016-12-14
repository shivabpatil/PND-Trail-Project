/**
* pndApp Modulecontroller('pndNavBarLoginCtrl')
*
* Description
*/
angular.module('pndApp').controller('pndNavBarLoginCtrl',function ($scope,$http) {
	$scope.signin = function (username,password) {
		console.log(username);
		$http.post('/login',{userName:username,password:password}).then(function(response){
			if(response.data.success){
				console.log('logged in ');
			}else{
				console.log('logging failed');
			}
		})
		console.log('this is fun');
	};

	$scope.myVar = 'yoyoy';
})