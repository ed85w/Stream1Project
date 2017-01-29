
angular.module('BandSite', ['ngRoute', 'RouteControllers','ngAnimate','ui.bootstrap','ngSanitize']);
 
angular.module('BandSite').config(function($routeProvider) {
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/band', {
        templateUrl: 'templates/band.html',
        controller: 'BandController'
    })
    .when('/gigs', {
    	templateUrl: 'templates/gigs.html',
    	controller: 'GigsController'
    });
});

