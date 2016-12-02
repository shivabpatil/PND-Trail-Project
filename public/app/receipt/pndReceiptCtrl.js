angular.module('pndApp').controller('pndReceiptCtrl', function($scope,$route,$filter,$window,$rootScope,$http,serviceCenterService,receiptService){
	
	// initalize everything 

	$scope.receipt = {
		_id:'',
		name: '',
		lname: '',
		contact: 0,
		brand:'',
		service_center_name:'',
		passing:'',
		bikenumber : '',
		chasssis_number:'',
		receipt_number:''
	};

	$http.get("/api10/brands").success(function(res){
				$scope.brands = res;

			});
	serviceCenterService.getServiceCenters().then(function (res) {
  		$scope.serviceCenters = res;
  	
  	});

  	receiptService.getReceipts().then(function(res){
  		$scope.receipts = res;
  	});

  	$scope.create = function (receipt,brand,receipt) {
  		delete receipt._id;
 		receipt.brand = brand.name;
 		receipt.service_center_name = receipt.name;
  		receiptService.postReceipt(receipt);
  		$route.reload();
  	};

  	$scope.bindSelectedData = function (receipt) {
		$scope.receipt._id = receipt._id;
		$scope.receipt.name = receipt.name;
		//$scope.receipt.brand = receipt.brand.name;
		$scope.receipt.lname = receipt.lname;
		$scope.receipt.contact = receipt.contact;
		$scope.receipt.brand = receipt.brand;
		$scope.receipt.service_center_name = receipt.service_center_name;
		$scope.receipt.passing = receipt.passing;
		$scope.receipt.bikenumber = receipt.bikenumber;
		$scope.receipt.chassis_number = receipt.chassis_number;
		$scope.receipt.receipt_number= receipt.receipt_number;	
	}

	$scope.edit = function (receiptId,receipt) {
		delete receipt._id;
		receiptService.editReceipt(receiptId,receipt);
		$route.reload();	
	}	
  	$scope.delete = function (receiptId) {
		receiptService.deleteReceipt(receiptId);
  		$route.reload();
	}

})

