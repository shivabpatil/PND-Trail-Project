angular.module('pndApp').controller('pndCustomerCtrl', function($scope,$filter,$window,$rootScope,$http,getcustomerService){
	
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
   
	


	$scope.create = function (customer,bike,schedule,serviceCenterDetails,slotDetails) {
		
		var bookedSlot = {} ;
		bookedSlot._slotId = slotDetails._id;
		bookedSlot.booking_date =  $filter('date')(schedule.pickup_date, "yyyy-MM-dd HH:mm:ss");		

		console.log(bookedSlot.booking_date);
		console.log(bookedSlot._slotId);

		$http.get("http://localhost:8000/api8/bookedSlots?_slotId=" + bookedSlot._slotId + "&booking_date=" + bookedSlot.booking_date ).success(function(res){
			$scope.bookedSlots = res;
			console.log($scope.bookedSlots);
			console.log($scope.bookedSlots.length);
			console.log(bookedSlot);
			if ($scope.bookedSlots.length < slotDetails.slot_capacity){
				bookedSlot.booking_count = $scope.bookedSlots.length + 1;
				$http.post("http://localhost:8000/api8/bookedSlots",bookedSlot).success(function(res){
				
					console.log(res);
					// console.log($scope.serviceCenters);
				});
			}
			else{
				console.log("Slot full");
			}

		});
	

		
		

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