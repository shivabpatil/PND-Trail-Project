
angular.module('pndApp').factory('myAuth',function($http,$q,myIdentity){
	return{
			authenticateUser:function(user){
				var dfd = $q.defer();
				$http.post('/login',user).then(function(response){
					if(response.data.success){
						myIdentity.currentUser = response.data.user
						dfd.resolve(true);
					}else{
						dfd.resolve(false);
					}
				})
				return dfd.promise;
			}
		}

});
