angular.module('pndApp').controller('pndAreaCtrl', function($scope,$location, $route,$filter,$window,$rootScope,$http,areaService){
	
	$scope.area = {
		_id:'',
		name: '',
		total_service_centers:0,
		total_dpersons:0
	};



	// $http.get("/api9/areas").success(function(res){
	// 			$scope.areas = res;
	// 			console.log($scope.areas);
	// 		});	

	// $scope.create = function (area) {
	// 	console.log(area);
	// 	delete area._id;
	// 	$http.post("/api9/areas",area).success(function (res) {
	// 		$scope.area1 = res;
	// 		console.log($scope.area1);
	// 		$route.reload();
	// 		// $window.location.href = '/areas/index';
	// 	})
	// }

	// $scope.delete = function (areaId) {
	// 	$http.delete("/api9/areas/" + areaId).success(function(res){
	// 			// $scope.msg = res;
	// 			// console.log($scope.msg);
	// 			$route.reload();
	// 		});	
	
	// }

	// $scope.bindSelectedData = function (area) {
	// 	$scope.area._id = area._id;
	// 	$scope.area.name = area.name;
	// 	$scope.area.no_service_centers = area.no_service_centers;
	// 	$scope.area.no_dpersons = area.no_dpersons;

	// }

	// $scope.edit = function (areaId,area) {
	// 	console.log(areaId);
	// 	console.log(area);

	// 	delete area._id;
	// 		console.log(area);

	// 	$http.patch("/api9/areas/" + areaId,area).success(function (res) {
	// 		$scope.area2 = res;
	// 		console.log($scope.area2);
	// 		$route.reload();
	// 		// $window.location.href = '/areas/index';
	// 	})
	// }	

})