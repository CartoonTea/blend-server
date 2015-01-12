angular
  .module('blend-web', [
    'ui.router',
    'blendConstants'
  ])

  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // $locationProvider.html5Mode(true);
    
    $stateProvider
      .state('auth', {
        url: '/',
        templateUrl: 'auth/auth.html',
        controller: 'AuthCtrl'
      })
      .state('repos', {
        url: '/repos',
        templateUrl: 'repos/repos.html',
        controller: 'RepoCtrl'
      });

    $urlRouterProvider.otherwise('/');

  });