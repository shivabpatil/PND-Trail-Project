angular.module('pndApp').controller('pndAreaCtrl', function($scope,ngDialog,areaService,$location,$route,$filter,$window,$rootScope){
	
	// get the list of the Areas 

	areaService.getAreas().then(function(res){
		$scope.areas = res.data;
		console.log($scope.areas);
	});

	// initialize the area to blank 

	$scope.area = {
		_id:'',
		name: '',
		total_service_centers:0,
		total_dpersons:0,
		service_centers:[],
		slots:[]
	};

	//create the area 

	$scope.create = function (area) {
		delete area._id;
		console.log(area);
		var suceeful = areaService.postArea(area);
	    $route.reload();
	}

	//delete the area 
	
	$scope.delete = function (areaId) {
		areaService.deleteArea(areaId);
		$route.reload();
	}


})