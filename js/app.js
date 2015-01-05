'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ngRoute','uiSlider', 'socket-io']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
		when('/', {templateUrl: 'partials/main.html', controller: MainController }).
/*		when('/main', {templateUrl: 'partials/main.html', controller: EntriesListCtrl }).		
*/
		otherwise({redirectTo: '/'});
      
  }]);


