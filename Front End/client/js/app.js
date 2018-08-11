
var myapp = angular.module('app', ['ui.router', 'restangular'])
myapp.run(['$rootScope', '$state', 'AuthService', ($rootScope, $state, AuthService) => {
  $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {
    if (toState.authenticate && !window.localStorage.getItem('accessTokenID')) {
      event.preventDefault()

      $rootScope.returnTo = {
        state: toState,
        params: toParams
      }

      $state.go('login');
    };
  })
}])

myapp.config(function (RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:3000/api')
  RestangularProvider.setDefaultRequestParams({ access_token: window.localStorage.accessTokenID })
})
