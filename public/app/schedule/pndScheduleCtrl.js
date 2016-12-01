angular.module('pndApp').controller('pndScheduleCtrl',function($scope,$filter, $route,$window,$rootScope,$http){

	var schedule = {};
    
	// $scope.fDate = new Date();
	// console.log(fDate)
	$http.get("/api6/schedules").success(function(res){
				$scope.schedules = res;
				//console.log(res);
			});	


	$scope.assignDPerson = function (scheduleId,name,contact) {
		console.log(scheduleId);
		console.log(name);
		console.log(contact);
		schedule.dperson_name = name;
		schedule.dpaerson_contact = contact;

		$http.patch("/api6/schedules/" + scheduleId,schedule).success(function (res) {
			$scope.sched = res;
			//console.log($scope.sched);
			$route.reload();
			// $window.location.href = '/areas/index';
		})
		
	}
	$scope.assignStatus = function (scheduleId,status) {
		// console.log(scheduleId);
		// console.log(status);
		schedule.status = status;

		$http.patch("/api6/schedules/" + scheduleId,schedule).success(function (res) {
			$scope.sched = res;
			// console.log($scope.sched);
			$route.reload();
			// $window.location.href = '/areas/index';
		})
	}
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
angular.module('pndApp').filter('dateFilter', function($filter) {
	return function(input,dt){
		var out = []
    //console.log(dt);
		var fDate = new Date(dt);
    
		//var fDate = fDate;
		angular.forEach(input,function(schedule){
			
			// console.log('schedule--'+schedule);
			// console.log('schedule pickup date--'+schedule.pickup_date);
			var pickup_date = new Date(schedule.pickup_date);
      pickup_date.setHours(0,0,0,0);
      fDate.setHours(0,0,0,0);
      // console.log(pickup_date);
      // console.log(fDate);
			//console.log('schedule pickup date 1---'+pickup_date);
		    //console.log('fdate'+fDate);
			var a = Date.parse(fDate);
			var b = Date.parse(pickup_date);
			 // console.log(' Result b--+--'+b);
    //   console.log(' Result a--'+a);
			 // console.log(' Result--'+(a ==b));
			if (a == b){
				//console.log('Filter works');
				out.push(schedule);
			}
		})
		//console.log(out);
	    return out;
	};


})


