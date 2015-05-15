(function (angular) {
	'use strict';
	
	angular.module('portfolio.services', ['ngResource'])
	
	.factory('About', ['$resource', function($resource) {
		return $resource('models/about.json');
	}])
	
	.factory('Edu', ['$resource', function($resource) {
		return $resource('models/education.json');
	}])
	
	.factory('Footer', ['$resource', function($resource) {
		return $resource('models/footer.json');
	}])
	
	.factory('Hero', ['$resource', function($resource) {
		return $resource('models/hero.json');
	}])
	
	.factory('Nav', ['$resource', function($resource) {
		return $resource('models/nav.json');
	}])
	
	.factory('Works', ['$resource', function($resource) {
		return $resource('models/works.json');
	}])
	
	;
	
})(angular);