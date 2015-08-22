//creating module
var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope){
	$scope.message = "Hi I'm Sergio";
});