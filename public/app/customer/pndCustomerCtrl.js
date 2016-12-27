angular.module('pndApp').controller('pndCustomerCtrl', function($scope,$location,customerDataService){

	$scope.addCustomerData = function(customer,customerForm){
		if(customerForm.$valid){
			customer.bikes = [];
			customer.addresses = [];
			customer.display_name = customer.name + " "+customer.lname;
			console.log(customer);
			customerDataService.c1 = customer;
			console.log(customerDataService.c1 );
			$location.path('/bike');
		}
	}
})
