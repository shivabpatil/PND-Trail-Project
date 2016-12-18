
angular.module('pndApp').factory('myIdentity',function(){
	return{
			currentUser:undefined,
			isAuthenticated:function(){
				return !!this.currentUser;
			}
		}

});
