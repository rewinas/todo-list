myapp.config([
  '$stateProvider',
  '$urlRouterProvider',
  ($stateProvider, $urlRouterProvider, Restangular) => {
    $stateProvider.state('analysis', {
      url: '/analysis',
      templateUrl: 'app/admin/admin.html',
      controller: 'mytask',
      authenticate: true
    })
  }
])
