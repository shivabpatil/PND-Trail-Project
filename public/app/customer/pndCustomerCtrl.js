angular.module('pndApp').controller('pndCustomerCtrl', function($scope,$filter,$window,$rootScope,$http,getcustomerService){
	
	var scheduleId;
    //$scope.serviceCenters = {};
	$http.get("http://localhost:8000/api9/areas").success(function(res){
				$scope.areas = res;
				//console.log($scope.areas);
			});	
  	
	
	$scope.selectServiceCenter =function (area) {
		//console.log(area._id)
		$http.get("http://localhost:8000/api2/servicecenters?_areaId="+ area._id).success(function(res){
			$scope.serviceCenters = res;
			//console.log(res);
			//console.log($scope.serviceCenters);
		});

		$http.get("http://localhost:8000/api7/slots?_areaId=" + area._id ).success(function(res){
			$scope.slots = res;
		    // console.log(res);
			//console.log($scope.slots);
		});
	}
	// $scope.selectSlots = function (area) {
	// 	// console.log(servicecenter._id);

		
		
	// }
   
	


	$scope.create = function (customer,bike,schedule,serviceCenterDetails,slotDetails,area) {
		
		var bookedSlot = {} ;
		bookedSlot._slotId = slotDetails._id;
		bookedSlot.booking_date = $filter('date')(schedule.pickup_date, "yyyy-MM-dd HH:mm:ss");
		schedule.pickup_date = new Date($filter('date')(schedule.pickup_date, "yyyy-MM-dd HH:mm:ss")); 
			
		schedule.customer_name = customer.name;
		schedule.customer_contact = customer.contact;
		schedule.customer_alternate_contact = customer.alternate_contact;
		schedule.drop_date = schedule.pickup_date;
		schedule.drop_address = customer.address;
		schedule.pickup_address = customer.address;
		schedule.bike_passing = bike.passing;
		schedule.bike_number = bike.bikenumber;
		schedule.dperson_name  = "";
		schedule.dpaerson_contact= 0;
		schedule._serviceCenterId = serviceCenterDetails._id;
		schedule.pickup_time= slotDetails.slot_time;
		schedule.drop_time= slotDetails.slot_time;
		// console.log(bookedSlot.booking_date);
		// console.log(schedule.pickup_date);
		// console.log(bookedSlot._slotId);
		//console.log(schedule);
		//console.log(customer);
		//console.log(bike);

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
				
				$http.post("http://localhost:8000/api3/customers",customer).success(function(res){			
						bike._customerId = res._id;
					});

				$http.post("http://localhost:8000/api4/bikes",bike).success(function(res){
					});

				$http.post("http://localhost:8000/api6/schedules",schedule).success(function(res){
						scheduleId = res._Id;
						console.log(res);
						//$window.location.href = '/schedules';
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
		



	
		// schedule._servicecenterId = "57e378e79965cb131cb3d33b";
	   
	}

	// $scope.jump = function () {
	// 	$window.location.href = '/schedules';
	// }

})