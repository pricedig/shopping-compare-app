var priceDig = angular.module('priceDig',['ngResource']);
priceDig.config(function($routeProvider)
{
	$routeProvider
	    .when('/',
		{
			controller:'mainController',
			templateUrl:'partials/main.html'
		})
		.when('/about',
		{
			controller:'aboutController',
			templateUrl:'partials/about.html'
		})
		.otherwise({
			redirectTo:'/'
		});
});
