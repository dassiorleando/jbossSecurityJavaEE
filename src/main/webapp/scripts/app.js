'use strict';

angular.module('jbossSecurity',['ngRoute','ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.html',controller:'LandingPageController'})
      .when('/UserAccounts',{templateUrl:'views/UserAccount/search.html',controller:'SearchUserAccountController'})
      .when('/UserAccounts/new',{templateUrl:'views/UserAccount/detail.html',controller:'NewUserAccountController'})
      .when('/UserAccounts/edit/:UserAccountId',{templateUrl:'views/UserAccount/detail.html',controller:'EditUserAccountController'})
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LandingPageController', function LandingPageController() {
  })
  .controller('NavController', function NavController($scope, $location) {
    $scope.matchesRoute = function(route) {
        var path = $location.path();
        return (path === ("/" + route) || path.indexOf("/" + route + "/") == 0);
    };
  });
