angular.module('pndApp').controller('pndServiceCenterCtrl', function($scope,areaService,$location,$route,$filter,$window,$rootScope){

	// get the list of the Areas

	areaService.getAreas().then(function(res){
		$scope.areas = res.data;
		console.log("$scope.areas");
	});

	//initialize the area to blank

	// $scope.area = {
	// 	_id:'',
	// 	name: '',
	// 	total_service_centers:0,
	// 	total_dpersons:0,
	// 	service_centers:[],
	// 	slots:[]
	// };

	//create the area

	$scope.create = function (area,areaSelected) {
		//delete area._id;
		//console.log(areaId);
		console.log(area);

		area.name = areaSelected.name;
		area.total_service_centers = areaSelected.total_service_centers;
		area.total_dpersons = areaSelected.total_dpersons;
		area.slots = [];
		areaService.editArea(areaSelected._id,area);
	 //    $route.reload();
	}

	// //delete the area

	// $scope.delete = function (areaId) {
	// 	areaService.deleteArea(areaId);
	// 	$route.reload();
	// }


})
