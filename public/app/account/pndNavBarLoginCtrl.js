/**
* pndApp Modulecontroller('pndNavBarLoginCtrl')
*
* Description
*/
angular.module('pndApp').controller('pndNavBarLoginCtrl',function ($scope) {
	$scope.signin = function (username,password) {
		console.log('this is fun');
	};

	$scope.myVar = 'yoyoy';
})