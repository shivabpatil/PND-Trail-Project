/**
*  Module
*
* Description
*/
angular.module('pndApp.customerServices', [])
	.service('getcustomerService', ['$http','$q',function($http,$q){
		
		this.getCustomers = function(){
			
			return $http.get("http://localhost:8000/api3/customers").then(function(res){
				return res;
			});
			
		}
	}])