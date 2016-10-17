angular.module('pndApp',['ngResource','ngRoute','ui.bootstrap','pndApp.customerServices']);

angular.module('pndApp').config(function($routeProvider,$locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
		.when('/',{templateUrl:'partials/main/main',controller:'pndMainCtrl'})
		.when('/customer',{templateUrl:'partials/customer/create',controller:'pndCustomerCtrl'})
		.when('/schedules',{templateUrl:'partials/schedule/index',controller:'pndScheduleCtrl'})
		.when('/areas',{templateUrl:'partials/area/create',controller:'pndAreaCtrl'})
		.when('/brands',{templateUrl:'partials/brand/create',controller:'pndBrandCtrl'})
		.when('/serviceCenters',{templateUrl:'partials/servicecenter/create',controller:'pndServiceCenterCtrl'})
})



