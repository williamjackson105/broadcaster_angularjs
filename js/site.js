var Site = angular.module('Site', []);

Site.config(function ($routeProvider) {
  $routeProvider
    .when('/page/:slug', {templateUrl: 'partials/page.html', controller: 'RouteController'})
    .otherwise({redirectTo: '/page/home'});
});

function AppController ($scope, $rootScope, $http) {
  // Load pages on startup
  $http.get('pages.json').success(function (data) {
    $rootScope.pages = data;
  });

  // Set the slug for menu active class
  $scope.$on('routeLoaded', function (event, args) {
    $scope.slug = args.slug;
  });
}