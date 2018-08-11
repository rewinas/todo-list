myapp.config([
  '$stateProvider',
  '$urlRouterProvider',
  ($stateProvider, $urlRouterProvider, Restangular) => {
    $stateProvider

      .state('login', {
        url: '/login',
        templateUrl: 'app/authentication/login.html',
        controller: 'AuthLoginController'
      })
      .state('logout', {
        url: '/logout',
        templateUrl: 'app/authentication/login.html',
        controller: 'AuthLogoutController'
      })
  }
])
