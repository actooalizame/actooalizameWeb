
// define our application and pull in ngRoute and ngAnimate
var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

// set our routing for this application
// each route will pull in a different controller
animateApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'page-home.html',
			controller: 'mainController'
		})
		.when('/about', {
			templateUrl: 'page-about.html',
			controller: 'aboutController'
		})
		.when('/contact', {
			templateUrl: 'page-contact.html',
			controller: 'contactController'
		});
});

// CONTROLLERS ============================================
// home page controller

animateApp.controller('mainController', function($scope) {
	$scope.pageClass = 'page-home';
});

animateApp.controller('aboutController', function($scope){
	$scope.pageClass = 'page-about';
});

animateApp.controller('contactController', function($scope){
	$scope.pageClass = 'page-contact';
});