angular.module('pndApp').controller('pndMainCtrl', function($scope){
	$scope.bikes = [
		{
			brand:'tvs',
			passing:'MH12',
			bikenumber:'EY9973',
			reading:2384,
		},
		{
			brand:'honda',
			passing:'MH12',
			bikenumber:'EY9073',
			reading:2374,
		},
		{
			brand:'suzuki',
			passing:'MH12',
			bikenumber:'EY3473',
			reading:4598,
		},
	]
})