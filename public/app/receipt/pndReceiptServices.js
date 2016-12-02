/**
*  Module
*
* Description
*/
angular.module('pndApp.receiptServices', [])
	.service('receiptService', ['$http','$q',function($http,$q){
		this.getReceipts = function(){
			 var deferred=$q.defer();
			return $.get("/api11/receipts").then(function(res){
				return res;
			});	
		}

		this.postReceipt = function(receipt){
			return $http.post("/api11/receipts",receipt).then(function(res){
				return res; 
			});
		}

		this.editReceipt = function(id,receipt){
			return $http.put("/api11/receipts/" + id,receipt).then(function(res){
			
				return res; 
			});

		}

		this.deleteReceipt = function(id){
			return $http.delete("/api11/receipts/" + id).then(function(res){
				return res; 
			});

		}

	
	}])