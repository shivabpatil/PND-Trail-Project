angular.module('pndApp',['ngResource','ngRoute']);

angular.module('pndApp').config(function($routeProvider,$locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
		.when('/',{templateUrl:'partials/main',controller:'pndMainCtrl'},console.log('inside loacl route'))
})



