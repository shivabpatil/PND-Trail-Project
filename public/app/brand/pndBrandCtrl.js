angular.module('pndApp').controller('pndBrandCtrl', function($scope, $route,$filter,$window,$rootScope,$http){
	
	$scope.brand = {
		_id:'',
		name: '',
		brand_info:''
	};

	$http.get("https://pndservices.herokuapp.com/api10/brands").success(function(res){
				$scope.brands = res;
				console.log($scope.brands);
			});	

	$scope.create = function (brand) {
		delete brand._id;
		console.log(brand);

		$http.post("https://pndservices.herokuapp.com/api10/brands",brand).success(function (res) {
			$scope.brand1 = res;
			console.log($scope.brand1);
			$route.reload();
			// $window.location.href = '/areas/index';
		})
	}

	$scope.delete = function (brandId) {
		$http.delete("https://pndservices.herokuapp.com/api10/brands/" + brandId).success(function(res){
				// $scope.msg = res;
				// console.log($scope.msg);
				$route.reload();
			});	
	
	}

	$scope.bindSelectedData = function (brand) {
		$scope.brand._id = brand._id;
		$scope.brand.name = brand.name;
		$scope.brand.brand_info = brand.brand_info;

	}

	$scope.edit = function (brandId,brand) {
		console.log(brandId);
		console.log(brand);

		delete brand._id;
			console.log(brand);

		$http.put("https://pndservices.herokuapp.com/api10/brands/" + brandId,brand).success(function (res) {
			$scope.brand2 = res;
			console.log($scope.brand2);
			$route.reload();
			// $window.location.href = '/areas/index';
		})
	}	

})