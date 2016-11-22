angular.module('pndApp').controller('pndScheduleCtrl',function($scope, $route,$window,$rootScope,$http){

	var schedule = {};

	$http.get("/api6/schedules").success(function(res){
				$scope.schedules = res;
				console.log(res);
			});	

	$scope.assignDPerson = function (scheduleId,name,contact) {
		console.log(scheduleId);
		console.log(name);
		console.log(contact);
		schedule.dperson_name = name;
		schedule.dpaerson_contact = contact;

		$http.patch("/api6/schedules/" + scheduleId,schedule).success(function (res) {
			$scope.sched = res;
			console.log($scope.sched);
			$route.reload();
			// $window.location.href = '/areas/index';
		})
		
	}
})