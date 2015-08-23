//creating module
var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

myApp.config(function($routeProvider){
	$routeProvider 

		//route for homepage
		.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'mainController'
		})
		//route for about
		.when('/about', {
			templateUrl: 'pages/about.html',
			controller: 'aboutController'
		})
		//route for contact
		.when('/contact', {
			templateUrl: 'pages/contact.html',
			controller: 'contactController'
		});
});

myApp.controller('mainController', function($scope){
	$scope.message = "Hi I'm Sergio";
	$scope.pageClass = 'homeStyle';
});

myApp.controller('aboutController', function($scope){
	$scope.message = "About me!!!!";
	$scope.pageClass = 'aboutStyle';
});

myApp.controller('contactController', function($scope){
	$scope.message = "Contact me?!?!?!?!";
	$scope.pageClass = 'contactStyle';
});