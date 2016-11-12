angular.module('pndApp').controller('pndMainCtrl', function($scope,$rootScope,$http,getcustomerService){
	
	$http.get("https://pndservices.herokuapp.com/api3/customers").success(function(res){
			$scope.data = res;
		});;

})