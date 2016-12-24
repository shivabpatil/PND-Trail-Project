angular.module('pndApp',['ngResource','ngRoute','ui.bootstrap','pndApp.pndAppServices','pndApp.customerDataServices','pndApp.customerServices','pndApp.serviceCenterServices','pndApp.receiptServices']);

angular.module('pndApp').config(function($routeProvider,$locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
		.when('/',{templateUrl:'partials/main/main',controller:'pndMainCtrl'})
		.when('/about',{templateUrl:'partials/main/about',controller:'pndMainCtrl'})
		.when('/blog',{templateUrl:'partials/main/blog',controller:'pndMainCtrl'})
		.when('/feedback',{templateUrl:'partials/main/feedback',controller:'pndMainCtrl'})
		.when('/annual_packages',{templateUrl:'partials/main/annualPackages',controller:'pndMainCtrl'})
		.when('/customer',{templateUrl:'partials/customer/create',controller:'pndCustomerCtrl'})
		.when('/schedules',{templateUrl:'partials/schedule/index',controller:'pndScheduleCtrl'})
		.when('/areas',{templateUrl:'partials/area/create',controller:'pndAreaCtrl'})
		.when('/brands',{templateUrl:'partials/brand/create',controller:'pndBrandCtrl'})
		// .when('/serviceCenters',{templateUrl:'partials/servicec/create',controller:'pndServiceCenterCtrl'})
		//.when('/slots',{templateUrl:'partials/slot/create',controller:'pndSlotCtrl'})
		.when('/receipts',{templateUrl:'partials/receipt/create',controller:'pndReceiptCtrl'})
		.when('/admin',{templateUrl:'partials/admin/mainPage',controller:''})
		.when('/serviceCenters',{templateUrl:'partials/area/createServiceCenter',controller:'pndServiceCenterCtrl'})
		.when('/slots',{templateUrl:'partials/area/createSlot',controller:'pndSlotCtrl'})
})
