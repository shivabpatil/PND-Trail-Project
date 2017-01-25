angular.module('pndApp').controller('pndBookSlotCtrl', function($scope,$location,$filter,myNotifire,bookSlotService,scheduleService,customerDataService,customerService,areaService,$http){
	areaService.getAreas().then(function(res){
		$scope.areas = res.data;
		console.log("$scope.areas");
	});

	$scope.addSlot = function(areaSelected,serviceCenterSelected,slotSelected,dateSelected,slotForm){
		if(slotForm.$valid){
			dateSelected = $filter('date')(dateSelected, "yyyy-MM-dd HH:mm:ss");
			console.log(dateSelected);
			console.log(slotSelected._id);
			$http.get("/api3/bookedSlots?_slotId=" + slotSelected._id + "&booking_date=" + dateSelected )
			.success(function(res){
 				$scope.bookedSlots = res;
				console.log($scope.bookedSlots);
				if($scope.bookedSlots[0]){
					myNotifire.notify('Slot is full. Select other slot');
				}else{
					var customer = customerDataService.c1;
					console.log(customer)
					var schedule = {};
					var bookedSlot = {};
					bookedSlot.count = slotSelected.slot_capacity;
					bookedSlot.date = dateSelected;
					bookedSlot._slotId = slotSelected._id;

					schedule.customer_name = customer.name;
					schedule.customer_contact= customer.contact;
					schedule.customer_alternate_contact = customer.alternate_contact;
					schedule.bike_passing = customer.bikes[0].bike_passing;
					schedule.bike_number = customer.bikes[0].bike_number;
					schedule.pickup_address = customer.addresses[0];
					schedule.drop_address = customer.addresses[0];
					schedule.pickup_date = dateSelected;
					schedule.drop_date = dateSelected;
					schedule.pickup_time = slotSelected.slot_time;
					schedule._serviceCenterId = serviceCenterSelected._serviceCenterId;
					schedule.service_center_name = serviceCenterSelected.service_center_name;
					schedule._areaId = areaSelected._areaId;

					//Add the slot to booked slot
				  bookSlotService.postBookedSlot(bookedSlot);

					//Add it to schedule
					scheduleService.postSchedule(schedule)

					myNotifire.notify('Schedule added');

					$location.path('/');
				}
		  });




		}
	}
  $scope.moveBack = function(){
    	$location.path('/address');
  }
})
