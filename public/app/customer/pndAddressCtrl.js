angular.module('pndApp').controller('pndAddressCtrl', function($scope,$location,customerDataService){

	$scope.addAddress = function(address,addressForm){
		if(addressForm.$valid){
		  var customer = customerDataService.c1;
      customer.addresses.push(address);
      console.log(customer)
			//$location.path();
		}
	}
  $scope.moveBack = function(){
    	$location.path('/address');
  }
})
