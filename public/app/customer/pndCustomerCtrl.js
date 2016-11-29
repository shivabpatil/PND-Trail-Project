angular.module('pndApp').controller('pndCustomerCtrl', function($scope,$filter,$window,$rootScope,$http,getcustomerService){
	
	var scheduleId;
	
    //$scope.serviceCenters = {};
	$http.get("/api9/areas").success(function(res){
				$scope.areas = res;
				//console.log($scope.areas);
			});	
	$http.get("/api10/brands").success(function(res){
				$scope.brands = res;
				console.log($scope.brands);
			});	
  	
	
	$scope.selectServiceCenter =function (area) {
		//console.log(area._id)
		$http.get("/api2/servicecenters?_areaId="+ area._id).success(function(res){
			$scope.serviceCenters = res;
			//console.log(res);
			//console.log($scope.serviceCenters);
		});

		$http.get("/api7/slots?_areaId=" + area._id ).success(function(res){
			$scope.slots = res;
		    // console.log(res);
			//console.log($scope.slots);
		});
	}
	// $scope.selectSlots = function (area) {
	// 	// console.log(servicecenter._id);

		
		
	// }
   
	


	$scope.create = function (customer,bike,schedule,serviceCenterDetails,slotDetails,area,brand) {
		
		var bookedSlot = {} ;
		console.log(schedule);
		bookedSlot._slotId = slotDetails._id;
		console.log(schedule.pickup_date)
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
		bike.brand = brand.name;
		// console.log(bookedSlot.booking_date);
		// console.log(schedule.pickup_date);
		// console.log(bookedSlot._slotId);
		//console.log(schedule);
		//console.log(customer);
		console.log(bike);

		$http.get("/api8/bookedSlots?_slotId=" + bookedSlot._slotId + "&booking_date=" + bookedSlot.booking_date ).success(function(res){
			$scope.bookedSlots = res;
			console.log($scope.bookedSlots);
			console.log($scope.bookedSlots.length);
			console.log(bookedSlot);
			if ($scope.bookedSlots.length < slotDetails.slot_capacity){
				bookedSlot.booking_count = $scope.bookedSlots.length + 1;
				$http.post("/api8/bookedSlots",bookedSlot).success(function(res){
				
					console.log(res);
					// console.log($scope.serviceCenters);
				});
				
				$http.post("/api3/customers",customer).success(function(res){			
						bike._customerId = res._id;
					});

				$http.post("/api4/bikes",bike).success(function(res){
							console.log(res);
					});

				$http.post("/api6/schedules",schedule).success(function(res){
						scheduleId = res._Id;
						console.log(res);
						//$window.location.href = '/schedules';
					});
				$scope.scheduleCreated();
				
			}
			else{
				console.log("Slot full");
				$scope.slotFull();
			}

		});
	}
	
	$scope.jump = function () {
		$window.location.href = '/schedules';
	}
	$scope.scheduleCreated = function() {
        $window.alert("The schedule is created for this entry");
        //$scope.jump();
      };
    $scope.slotFull = function() {
        $window.alert("The selected slot is full");
      };

})

.directive('datepicker', function() {
    return {

      restrict: 'A',
      // Always use along with an ng-model
      require: '?ngModel',

      link: function(scope, element, attrs, ngModel) {
        if (!ngModel) return;

        ngModel.$render = function() { //This will update the view with your model in case your model is changed by another code.
           element.datepicker('update', ngModel.$viewValue || '');
        };

        element.datepicker().on("changeDate",function(event){
            scope.$apply(function() {
               ngModel.$setViewValue(event.date);//This will update the model property bound to your ng-model whenever the datepicker's date changes.
            });
        });
      }
    };
});