myapp.config([
  '$stateProvider',
  '$urlRouterProvider',
  ($stateProvider, $urlRouterProvider, Restangular) => {
    $stateProvider.state('task', {
      url: '/task',
      templateUrl: 'app/task/mtask.html',
      controller: 'mytask',
      authenticate: true
    })
  }
])
