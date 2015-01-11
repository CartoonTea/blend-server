angular
  .module('blend-web', [
    'ui.router'
  ])

  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state('auth', {
        url: '/',
        templateUrl: 'auth/auth.html',
        controller: 'AuthCtrl'
      });

    $urlRouterProvider.otherwise('/');

  });