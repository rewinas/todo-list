myapp.controller('myproject', [
  'myprojectService',
  '$scope',
  function(myprojectService, $scope, $state, $stateParams) {
    let vm = this
    vm.MyRole = window.localStorage.getItem('userLevel')
    vm.myName = window.localStorage.getItem('userName')
    vm.MyUserId = window.localStorage.getItem('currentUser')

    myprojectService.getProjects().then(res => {
      vm.myprojects = res
    })
    let DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24

    vm.date = Date.now() - DAY_IN_MILLISECONDS * 4

    $scope.projectz = { date: vm.date, name: vm.name }

    // ADD PROJECT

    vm.register = () => {
      myprojectService.createProject($scope.projectz).then(res => {
        myprojectService.getProjects().then(resp => {
          vm.myprojects = resp
          $scope.projectz.name = ' '
        })
      })
    }

    // SORTING OF PROJECTS

    vm.orderByMe = x => {
      vm.myOrderBy = x
    }

    // DELETE PROJECT

    vm.delete = myid => {
      vm.idd = myid
      myprojectService.deleteProject(vm.idd).then(r => {
        myprojectService.getProjects().then(res => {
          vm.myprojects = res
        })
      })
    }
  }
])
