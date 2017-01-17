
angular.module('pndApp').value('myToastr',toastr);

angular.module('pndApp').factory('myNotifire',function(myToastr){
	return{
		notify:function(msg){
			myToastr.success(msg);
		}
	}
});
