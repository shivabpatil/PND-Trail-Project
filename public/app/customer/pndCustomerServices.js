/**
*  Module
*
* Description
*/
angular.module('pndApp.customerServices', [])
	.service('customerService', ['$http','$q',function($http,$q){

		this.getCutomers = function(){
			return $http.get("/api2/customers");
		}
		this.postCustomer = function(customer){
			console.log(customer);
			return $http.post("/api2/customers",customer);
		}
		this.editArea = function(id,area){
			console.log("id:"+id);
			console.log(area);
			return $http.put("/api2/customers/" + id,area).then(function(res){
				console.log(res);
				return res;
			});
		}
		this.deleteArea = function(id){
			return $http.delete("/api2/customers/" + id).then(function(res){
				return res;
			});
		}
	}]);
