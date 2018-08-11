myapp
  .controller('AuthLoginController', [
    '$scope',
    'AuthService',
    '$state',
    ($scope, AuthService, $state) => {
      let vm = this
      vm.MyUserId = window.localStorage.getItem('currentUser')
      vm.MyRole = window.localStorage.getItem('userLevel')
      vm.user = {
        email: '',
        password: ''
      }

      $scope.login = () => {
        AuthService.login($scope.user).then(() => {
          if ($scope.returnTo && $scope.returnTo.state) {
            $state.go($scope.returnTo.state.name, $scope.returnTo.params)

            $scope.returnTo.state = null
            $scope.returnTo.params = null
            return
          }
          $state.go('home')
        })
      }
    }
  ])
  .controller('AuthLogoutController', [
    '$scope',
    'AuthService',
    '$state',
    ($scope, AuthService, $state) => {
      AuthService.logout()
    }
  ])
