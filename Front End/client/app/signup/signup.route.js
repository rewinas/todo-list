myapp.config([
  '$stateProvider',
  '$urlRouterProvider',
  ($stateProvider, $urlRouterProvider, Restangular) => {
    $stateProvider.state('sign-up', {
      url: '/sign-up',
      templateUrl: 'app/signup/signup.html',
      controller: 'SignUpController'
    })
  }
])
