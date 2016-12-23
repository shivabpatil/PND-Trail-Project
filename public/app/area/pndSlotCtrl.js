angular.module('pndApp').controller('pndSlotCtrl', function($scope,areaService,$location,$route,$filter,$window,$rootScope){

	// get the list of the Areas
  $scope.options = ['6-7','7-8','8-9','9-10','10-11','11-12','12-13','13-14','14-15','15-16','16-17','17-18','18-19','19-20','20-21']
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

	$scope.create = function (area,areaSelected,slotForm) {
		//delete area._id;
		console.log(areaSelected);
		console.log(area);

		area.name = areaSelected.name;
		area.total_service_centers = areaSelected.total_service_centers;
		area.total_dpersons = areaSelected.total_dpersons;
		area.service_centers = [];
    if(slotForm.$valid){
      areaService.editArea(areaSelected._id,area);
  	  $route.reload();
    }

	}

	// //delete the area

	// $scope.delete = function (areaId) {
	// 	areaService.deleteArea(areaId);
	// 	$route.reload();
	// }


})
