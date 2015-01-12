angular
  .module('blend-web', [
    'ui.router',
    'blendConstants'
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