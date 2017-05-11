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
	.service('bookSlotService', ['$http','$q',function($http,$q){

		this.postBookedSlot = function(bookedSlot){
			return $http.post("/api3/bookedSlots",bookedSlot);
		}
		this.deleteBookedSlot= function(id){
			return $http.delete("/api3/bookedSlots/" + id).then(function(res){
				return res;
			});

		}
	}])
	.service('scheduleService', ['$http','$q',function($http,$q){

		this.getSchedule = function(){
			return $http.get("/api4/schedules");
		}

		this.postSchedule = function(schedule){
			return $http.post("/api4/schedules",schedule);
		}

		this.editSchedule = function(id,schedule){
			console.log("id:"+id);
			console.log(schedule);
			return $http.put("/api4/schedules/" + id,schedule).then(function(res){
				console.log(res);
				return res;
			});

		}
		this.deleteSchedule = function(id){
			return $http.delete("/api4/schedules/" + id).then(function(res){
				return res;
			});

		}
	}])
