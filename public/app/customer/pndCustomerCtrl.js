angular.module('pndApp').controller('pndCustomerCtrl', function($scope,$window,$rootScope,$http,getcustomerService){
	
	var scheduleId
	$http.get("http://localhost:8000/api3/customers").success(function(res){
			$scope.data = res;
		});
	$scope.create = function (customer,bike,schedule) {
		console.log(customer)
		schedule.drop_date = schedule.pickup_date;
		schedule.drop_address = customer.address;
		schedule.pickup_address = customer.address

		$http.post("http://localhost:8000/api3/customers",customer).success(function(res){			
				bike._customerId = res._id;
				schedule._customerId = res._id;
			});

		$http.post("http://localhost:8000/api4/bikes",bike).success(function(res){
				schedule._bikeId = res._id;
			});
		schedule._servicecenterId = "57e378e79965cb131cb3d33b";
	   	$http.post("http://localhost:8000/api6/schedules",schedule).success(function(res){
				scheduleId = res._Id;
				$window.location.href = '/schedules';
			});
	}

	// $scope.jump = function () {
	// 	$window.location.href = '/schedules';
	// }

})