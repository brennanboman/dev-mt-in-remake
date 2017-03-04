angular.module('project', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
          .state('initial', {
            url: '/',
            templateUrl: 'views/initial.html'
          })
          .state('find', {
            url: '/find',
            templateUrl: 'views/find.html'
          })
          .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
          })
          .state('update', {
            url: '/update',
            templateUrl: 'views/update.html'
          })
          .state('view', {
            url: '/view',
            templateUrl: 'views/view.html'
          })

      $urlRouterProvider
      .otherwise('/');
  })
