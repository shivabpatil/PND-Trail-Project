angular.module('pndApp').controller('pndMainCtrl', function($scope,$rootScope,$http,getcustomerService){
	
	$http.get("http://localhost:8000/api3/customers").success(function(res){
			$scope.data = res;
		});;

})