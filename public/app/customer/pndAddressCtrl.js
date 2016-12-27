angular.module('pndApp').controller('pndAddressCtrl', function($scope,$location,customerDataService,customerService){

	$scope.addAddress = function(address,addressForm){
		if(addressForm.$valid){
		  var customer = customerDataService.c1;
      customer.addresses.push(address);
      console.log(customer)
			customerService.postCustomer(customer);
			console.log(customer)
			$location.path('/admin')
		}
	}
  $scope.moveBack = function(){
    	$location.path('/bike');
  }
})
