angular.module('pndApp').controller('pndScheduleCtrl',function($scope,$window,$rootScope,$http){

	var schedule = {};

	$http.get("http://localhost:8000/api6/schedules").success(function(res){
				$scope.schedules = res;
			});	

	$scope.assignDPerson = function (scheduleId,name,contact) {
		console.log(scheduleId);
		console.log(name);
		console.log(contact);
		schedule.dperson_name = name;
		schedule.dpaerson_contact = contact;

		// $http.put("http://localhost:8000/api6/schedules/" + scheduleId,schedule).success(function (res) {
		// 	$scope.sched = res;
		// 	console.log($scope.sched);
		// 	$route.reload();
		// 	// $window.location.href = '/areas/index';
		// })
		
	}
})