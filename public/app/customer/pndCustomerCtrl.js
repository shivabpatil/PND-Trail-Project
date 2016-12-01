angular.module('pndApp').controller('pndCustomerCtrl', function($scope, $route,$filter,$window,$rootScope,$http,getcustomerService){
	
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
   
	


	$scope.create = function (customer,bike,dt,serviceCenterDetails,slotDetails,area,brand) {
		
		var bookedSlot = {} ;
		var schedule = {};
		bookedSlot._slotId = slotDetails._id;
		console.log(dt)
		bookedSlot.booking_date = $filter('date')(dt, "yyyy-MM-dd HH:mm:ss");
		schedule.pickup_date = new Date($filter('date')(dt, "yyyy-MM-dd HH:mm:ss")); 
			
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
				$route.reload();
				
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
    $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  $scope.dateOptions = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }

})

