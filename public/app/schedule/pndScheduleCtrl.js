angular.module('pndApp').controller('pndScheduleCtrl',function($scope,$filter, $route,$window,$rootScope,$http){

	var schedule = {};
    
	// $scope.fDate = new Date();
	// console.log(fDate)
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
	$scope.assignStatus = function (scheduleId,status) {
		console.log(scheduleId);
		console.log(status);
		schedule.status = status;

		$http.patch("/api6/schedules/" + scheduleId,schedule).success(function (res) {
			$scope.sched = res;
			console.log($scope.sched);
			$route.reload();
			// $window.location.href = '/areas/index';
		})
		
	}
})
angular.module('pndApp').filter('dateFilter', function($filter) {
	return function(input,fDate){
		var out = []
		var fDate = new Date(fDate);
		//var fDate = fDate;
		angular.forEach(input,function(schedule){
			
			// console.log('schedule--'+schedule);
			// console.log('schedule pickup date--'+schedule.pickup_date);
			var pickup_date = new Date(schedule.pickup_date);

			//console.log('schedule pickup date 1---'+pickup_date);
		    //console.log('fdate'+fDate);
			var a = Date.parse(fDate);
			var b = Date.parse(pickup_date);
			// console.log(' Result a--'+a);
			// console.log(' Result a--'+b);
			console.log(' Result--'+(a ==b));
			if (a == b){
				console.log('Filter works');
				out.push(schedule);
			}
		})
		console.log(out);
	    return out;

	};
});