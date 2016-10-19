/**
*  Module
*
* Description
*/
angular.module('pndApp.serviceCenterServices', [])
	.service('serviceCenterService', ['$http','$q',function($http,$q){
		this.getServiceCenters = function(){
			 var deferred=$q.defer();
			return $.get("http://localhost:8000/api2/servicecenters").then(function(res){
				return res;
			});	
		}

		this.postServiceCenter = function(serviceCenter){

			//console.log(serviceCenter)
			return $.post("http://localhost:8000/api2/servicecenters",serviceCenter).then(function(res){
				console.log(res);
				return res; 
			});
		}
	}])