myapp.config([
  '$stateProvider',
  '$urlRouterProvider',
  ($stateProvider, $urlRouterProvider, Restangular) => {
    $stateProvider.state('project', {
      url: '/project',
      templateUrl: 'app/project/project.html',
      controller: 'myproject',
      authenticate: true
    })
  }
])
