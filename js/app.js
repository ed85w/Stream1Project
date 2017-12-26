
var BandSite = angular.module('BandSite', ['ngRoute', 'RouteControllers','ngAnimate','ui.bootstrap','ngSanitize','ContactDirective']);
 
angular.module('BandSite').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
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
    })
    .when('/music', {
        templateUrl: 'templates/music.html',
        controller: 'MusicController'
    })
    .when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: 'ContactController'
    });
});
