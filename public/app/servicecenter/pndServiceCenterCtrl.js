angular.module('pndApp').controller('pndServiceCenterCtrl', function($scope,$filter,$route,$filter,$window,$rootScope,$http,serviceCenterService){
	$scope.temp = "dshgfdjhghdfsg";
	$scope.serviceCenter = {
		_id:'',
		_adminId:'',
		_areaId:'',
		_brandId:'',
		name: '',
		brand:'',
		email:'',
		contact:0,
		address : {},
		area_group:'',
		capacity:0,
		slotcapacity:0,
		deliverypersons:0,
		start_time:new Date('HH:mm'),
		end_time:new Date('HH:mm'),
	};
	// console.log($scope.serviceCenter);

	$http.get("http://localhost:8000/api9/areas").success(function(res){
				$scope.areas = res;
				console.log($scope.areas);
			});	
  	
    serviceCenterService.getServiceCenters().then(function (res) {
  		$scope.serviceCenters = res;
  		 console.log($scope.serviceCenters);
  	});

  	
  	//console.log($scope.serviceCenters);

  	$scope.create = function (serviceCenter) {
  		delete serviceCenter._id;
  		delete serviceCenter._adminId;
  		delete serviceCenter._brandId;
  		//delete serviceCenter._areaId;

  		console.log(serviceCenter);
  		serviceCenterService.postServiceCenter(serviceCenter);

  		$route.reload();
  	};

  	$scope.bindSelectedData = function (serviceCenter) {
		$scope.serviceCenter._id = serviceCenter._id;
		$scope.serviceCenter.name = serviceCenter.name;
		$scope.serviceCenter.brand = serviceCenter.brand;
		$scope.serviceCenter.email = serviceCenter.email;
		$scope.serviceCenter.contact = serviceCenter.contact;
		$scope.serviceCenter.address = serviceCenter.address;
		$scope.serviceCenter.area_group = serviceCenter.area_group;
		//$scope.serviceCenter.start_time = new Date($filter('date')(serviceCenter.start_time, "HH:mm"));
		//console.log(serviceCenter.start_time)
		//console.log(serviceCenter.start_time)
		// $scope.serviceCenter.end_time= serviceCenter.end_time;
	}

	$scope.edit = function (serviceCenterId,serviceCenter) {
		console.log(serviceCenterId);
		console.log(serviceCenter);
		delete serviceCenter._id;
		console.log(serviceCenter);
		serviceCenterService.editServiceCenter(serviceCenterId,serviceCenter);
		
	}	


	$scope.delete = function (serviceCenterId) {
		console.log(serviceCenterId);
		serviceCenterService.deleteServiceCenter(serviceCenterId);
		
  		$route.reload();
	}

	// $http.get("http://localhost:8000/api2/servicecenters").success(function(res){
	// 			$scope.serviceCenters = res;
	// 			console.log($scope.serviceCenters);
	// 		});	

	// $scope.create = function (brand) {
	// 	delete brand._id;
	// 	console.log(brand);

	// 	$http.post("http://localhost:8000/api10/brands",brand).success(function (res) {
	// 		$scope.brand1 = res;
	// 		console.log($scope.brand1);
	// 		$route.reload();
	// 		// $window.location.href = '/areas/index';
	// 	})
	// }


	

	

})