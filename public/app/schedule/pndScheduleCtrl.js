angular.module('pndApp').controller('pndScheduleCtrl', function($scope,$window,$rootScope,$http,getcustomerService){

	 $http.get("http://localhost:8000/api6/schedules").success(function(res){
				$scope.schedules = res;
			});	
})