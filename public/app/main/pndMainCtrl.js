angular.module('pndApp').controller('pndMainCtrl', function($scope,$rootScope,$http,getcustomerService){
	
	$http.get("/api3/customers").success(function(res){
			$scope.data = res;
		});;

})