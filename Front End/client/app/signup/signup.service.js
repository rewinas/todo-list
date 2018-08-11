myapp.factory('signupService', [
  '$q',
  '$rootScope',
  '$state',
  'Restangular',
  ($q, $rootScope, $state, Restangular) => {
    let vm = this
    vm.register = data => {
      let basePersons = Restangular.all('/persons')
      let postInfo = basePersons.post(data)
      $state.go('login')
      return postInfo
    }
    return {
      register: vm.register
    }
  }
])
