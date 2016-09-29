angular.module('pndApp').controller('pndCustomerCtrl', function($scope,$window,$rootScope,$http,getcustomerService){
	
	var scheduleId;
    //$scope.serviceCenters = {};
	
	$http.get("http://localhost:8000/api2/servicecenters").success(function(res){
			$scope.serviceCenters = res;
			//console.log(res);
			//console.log($scope.serviceCenters);
		});
	$scope.selectSlots = function (servicecenter) {
		console.log(servicecenter._id);

		$http.get("http://localhost:8000/api7/slots?_servicecenterId=" + servicecenter._id ).success(function(res){
			$scope.slots = res;
		    console.log(res);
			//console.log($scope.slots);
		});
		
	}
   
	


	$scope.create = function (customer,bike,schedule) {
		
		var bookedSlot = {} ;
		bookedSlot.pickup_date = schedule.pickup_date;
		bookedSlot._servicecenterId = schedule._servicecenterId._id;
		bookedSlot.pickup_time = schedule.pickup_time.slot_time;

		console.log(bookedSlot.pickup_date);
		console.log(bookedSlot._servicecenterId);
		console.log(bookedSlot.pickup_time);

		// $http.get("http://localhost:8000/api8/bookedSlots").success(function(res){
		// 	$scope.bookedsSlots = res;
		// 	console.log(res);
		// 	console.log($scope.serviceCenters);
		// });

		// $http.post("http://localhost:8000/api8/bookedSlots",).success(function(res){
		// 	$scope.serviceCenters = res;
		// 	console.log(res);
		// 	console.log($scope.serviceCenters);
		// });

		// console.log(customer)
		// schedule.drop_date = schedule.pickup_date;
		// schedule.drop_address = customer.address;
		// schedule.pickup_address = customer.address



		// $http.post("http://localhost:8000/api3/customers",customer).success(function(res){			
		// 		bike._customerId = res._id;
		// 		schedule._customerId = res._id;
		// 	});

		// $http.post("http://localhost:8000/api4/bikes",bike).success(function(res){
		// 		schedule._bikeId = res._id;
		// 	});
		// schedule._servicecenterId = "57e378e79965cb131cb3d33b";
	 //   	$http.post("http://localhost:8000/api6/schedules",schedule).success(function(res){
		// 		scheduleId = res._Id;
		// 		$window.location.href = '/schedules';
		// 	});
	}

	// $scope.jump = function () {
	// 	$window.location.href = '/schedules';
	// }

})