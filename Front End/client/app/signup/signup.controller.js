myapp.controller('SignUpController', [
  '$scope',
  'signupService',
  '$state',
  function($scope, signupService, $state) {
    let vm = this
    vm.register = () => {
      $scope.user.role = 'user'
      signupService.register($scope.user).then(() => {
        $state.transitionTo('login')
      })
    }
  }
])
