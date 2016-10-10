angular.module('pndApp').controller('pndScheduleCtrl',function($scope,$window,$rootScope,$http){

	$http.get("http://localhost:8000/api6/schedules").success(function(res){
				$scope.schedules = res;
			});	

	$scope.assignDPersson = function (id,dperson_name,dperson_contact) {
		console.log(id);
		console.log(dperson_name);
		console.log(dperson_contact);
	}
})