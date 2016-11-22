angular.module('pndApp').controller('pndSlotCtrl', function($scope,$location, $route,$filter,$window,$rootScope,$http){
	
	$scope.slot = {
		_id:'',
		slot_time: '',
		slot_capacity:0,
		_areaId:''
	};

	$http.get("/api9/areas").success(function(res){
				$scope.areas = res;
				// console.log($scope.areas);
			});	



	$http.get("/api7/slots").success(function(res){
				$scope.slots = res;
				// console.log($scope.slots);
			});	

	$scope.create = function (slot,area) {
		console.log(slot);
		delete slot._id;
		slot._areaId = area._id;

		// console.log(slot);

		$http.post("/api7/slots",slot).success(function (res) {
			$scope.slot1 = res;
			console.log($scope.slot1);
			$route.reload();
			// $window.location.href = '/slots/index';
		})
	}

	$scope.delete = function (slotId) {
		$http.delete("/api7/slots/" + slotId).success(function(res){
				// $scope.msg = res;
				// console.log($scope.msg);
				$route.reload();
			});	
	
	}

	$scope.bindSelectedData = function (slot) {
		$scope.slot._id = slot._id;
		$scope.slot.slot_time = slot.slot_time;
		$scope.slot.slot_capacity = slot.slot_capacity;
		$scope.slot._areaId = slot._areaId;
		console.log($scope.slot);

	}

	$scope.edit = function (slotId,slot) {
		console.log(slotId);
		console.log(slot);
		delete slot._id;

		$http.patch("/api7/slots/" + slotId,slot).success(function (res) {
			$scope.slot2 = res;
			console.log($scope.slot2);
			$route.reload();
			// $window.location.href = '/slots/index';
		})
	}	

})