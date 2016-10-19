angular.module('pndApp').controller('pndServiceCenterCtrl', function($scope, $route,$filter,$window,$rootScope,$http,serviceCenterService){
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
		address : [],
		area_group:'',
		capacity:0,
		slotcapacity:0,
		deliverypersons:0,
		start_time:'',
		end_time:''
	};
	console.log($scope.serviceCenter);
  	
    serviceCenterService.getServiceCenters().then(function (res) {
  		$scope.serviceCenters = res;
  		console.log($scope.serviceCenters);
  	});
  	console.log($scope.serviceCenters);

  	$scope.create = function (serviceCenter) {
  		delete serviceCenter._id;
  		delete serviceCenter._adminId;
  		delete serviceCenter._brandId;
  		delete serviceCenter._areaId;
  		console.log(serviceCenter);
  		serviceCenterService.postServiceCenter(serviceCenter);
  	};

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

	// $scope.delete = function (brandId) {
	// 	$http.delete("http://localhost:8000/api10/brands/" + brandId).success(function(res){
	// 			// $scope.msg = res;
	// 			// console.log($scope.msg);
	// 			$route.reload();
	// 		});	
	
	// }

	// $scope.bindSelectedData = function (brand) {
	// 	$scope.brand._id = brand._id;
	// 	$scope.brand.name = brand.name;
	// 	$scope.brand.brand_info = brand.brand_info;

	// }

	// $scope.edit = function (brandId,brand) {
	// 	console.log(brandId);
	// 	console.log(brand);

	// 	delete brand._id;
	// 		console.log(brand);

	// 	$http.put("http://localhost:8000/api10/brands/" + brandId,brand).success(function (res) {
	// 		$scope.brand2 = res;
	// 		console.log($scope.brand2);
	// 		$route.reload();
	// 		// $window.location.href = '/areas/index';
	// 	})
	// }	

})