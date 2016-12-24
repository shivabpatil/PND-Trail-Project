angular.module('pndApp').controller('pndBikeCtrl', function($scope,$location,customerDataService){

	$scope.addBike = function(bike,bikeForm){
		if(bikeForm.$valid){
		  var customer = customerDataService.c1;
      customer.bikes.push(bike);
      console.log(customer)
			$location.path('/address');
		}
	}
  $scope.moveBack = function(){
    	$location.path('/customer');
  }
})
