myapp.factory('AuthService', [
  '$q',
  '$rootScope',
  '$state',
  'Restangular',
  ($q, $rootScope, $state, Restangular) => {
    let vm = this
    vm.login = data => {
      let loginResults = Restangular.one('/persons/login')
        .post(undefined, data, { include: 'user' })
        .then(
          data => {
            let mytoken = data.id
            vm.storeToken(data)
            Restangular.setDefaultHeaders({
              accept: 'application/json',
              access_token: mytoken
            })
            $state.go('home')
          },
          Response => {}
        )
      return loginResults
    }

    // DELETE TOKEN

    vm.storeToken = data => {
      window.localStorage.setItem('accessTokenID', data.id)
      window.localStorage.setItem('currentUser', data.userId)
      window.localStorage.setItem('userName', data.user.name)
      window.localStorage.setItem('userEmail', data.user.email)
      window.localStorage.setItem('userLevel', data.user.role)
      return data
    }

    vm.logout = () => {
      vm.destroyToken()
      $state.go('login')
      window.location.reload()
    }
    vm.destroyToken = () => {
      window.localStorage.removeItem('accessTokenID')
      window.localStorage.setItem('currentUser', 'empty')
      window.localStorage.removeItem('userName')
      window.localStorage.removeItem('userEmail')
      window.localStorage.removeItem('userLevel')
      Restangular.setDefaultHeaders({
        Authorization: undefined,
        access_token: undefined
      })
    }
    vm.register = data => {
      let basePersons = Restangular.all('/persons')
      let postInfo = basePersons.post(data)
      $state.go('login')
      return postInfo
    }
    return {
      login: vm.login,
      logout: vm.logout,
      register: vm.register
    }
  }
])
