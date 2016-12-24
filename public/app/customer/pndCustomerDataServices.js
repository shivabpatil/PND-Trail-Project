angular.module('pndApp.customerDataServices', [])
	.service('customerDataService',function(){
			return{
				customer:{
					name:'',
					lname:'',
					contact:0,
					alternate_contact:0,
					email:'',
					display_name:'',
					addresses:[{}],
					bikes:[{}]
				}
			}

		});
