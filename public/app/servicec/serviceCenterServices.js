/**
*  Module
*
* Description
*/
angular.module('pndApp.serviceCenterServices', [])
	.service('serviceCenterService', ['$http','$q',function($http,$q){
		this.getServiceCenters = function(){
			 var deferred=$q.defer();
			return $.get("https://pndservices.herokuapp.com/api2/servicecenters").then(function(res){
				return res;
			});	
		}

		this.postServiceCenter = function(serviceCenter){

			//console.log(serviceCenter)
			return $http.post("https://pndservices.herokuapp.com/api2/servicecenters",serviceCenter).then(function(res){
				console.log(res);
				return res; 
			});
		}

		this.editServiceCenter = function(id,serviceCenter){
			console.log("id:"+id);
			console.log(serviceCenter);
			return $http.put("https://pndservices.herokuapp.com/api2/servicecenters/" + id,serviceCenter).then(function(res){
				console.log(res);
				return res; 
			});

		}

		this.deleteServiceCenter = function(id){
			return $http.delete("https://pndservices.herokuapp.com/api2/servicecenters/" + id).then(function(res){
				console.log(res);
				return res; 
			});

		}
	}])