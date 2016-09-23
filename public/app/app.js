angular.module('pndApp',['ngResource','ngRoute']);

angular.module('pndApp').config(function($routeProvider,$locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
		.when('/',{templateUrl:'partials/main',controller:'mainCtrl'},console.log('inside loacl route'))
})


angular.module('pndApp').controller('mainCtrl', function($scope){
	$scope.myVar =  "Hello angular";
})
