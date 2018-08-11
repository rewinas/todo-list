myapp.config([
  '$stateProvider',
  '$urlRouterProvider',
  ($stateProvider, $urlRouterProvider, Restangular) => {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'app/common/home.html',
      authenticate: true
    })
    $urlRouterProvider.otherwise('login')
  }
])
