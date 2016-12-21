angular.module('pndApp').controller('pndMainCtrl', function($scope,$rootScope,$http,getcustomerService){
	  $scope.options = ['6-7','7-8','8-9','9-10','10-11','11-12','12-13','13-14','14-15','15-16','16-17','17-18','18-19','19-20','20-21']
	$http.get("/api3/customers").success(function(res){
			$scope.data = res;
		});;

})
