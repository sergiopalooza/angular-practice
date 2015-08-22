//creating module
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider 

		//route for homepage
		.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'mainController'
		})

		.when('/about', {
			templateUrl: 'pages/about.html',
			controller: 'aboutController'
		})

		.when('/contact', {
			templateUrl: 'pages/contact.html',
			controller: 'contactController'
		});
});

myApp.controller('mainController', function($scope){
	$scope.message = "Hi I'm Sergio";
});

myApp.controller('aboutController', function($scope){
	$scope.message = "About me!!!!";
});

myApp.controller('contactController', function($scope){
	$scope.message = "Contact me?!?!?!?!";
});