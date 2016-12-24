/**
*  Module
*
* Description
*/
angular.module('pndApp.pndAppServices', [])
	.service('areaService', ['$http','$q',function($http,$q){

		this.getAreas = function(){
			return $http.get("/api1/areas");
		}

		this.postArea = function(area){
			return $http.post("/api1/areas",area);
		}

		this.editArea = function(id,area){
			console.log("id:"+id);
			console.log(area);
			return $http.put("/api1/areas/" + id,area).then(function(res){
				console.log(res);
				return res;
			});

		}

		this.deleteArea = function(id){
			return $http.delete("/api1/areas/" + id).then(function(res){
				return res;
			});

		}
	}])
