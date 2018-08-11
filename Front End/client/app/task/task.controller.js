myapp.controller('mytask', [
  'mytaskService',
  '$scope',
  '$state',
  function(mytaskService, $scope, $state) {
    let vm = this
    vm.MyRole = window.localStorage.getItem('userLevel')
    vm.MyName = window.localStorage.getItem('userName')
    vm.MyUserId = window.localStorage.getItem('currentUser')
    vm.err = 'undefined'
    vm.mytaskcount = mytaskService.count().get().$object
    vm.myprocount = mytaskService.count2().get().$object
    $scope.myprojects = mytaskService.getProjects().$object

    mytaskService.getTasks(vm.MyUserId).then(res => {
      $scope.mytasks = res
    })

    let DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24

    $scope.date = Date.now() - DAY_IN_MILLISECONDS * 4
    $scope.task = {
      date: $scope.date,
      status: 'false',
      todos: $scope.todos,
      description: $scope.description,
      ownerId: vm.MyUserId,
      projectId: $scope.projectname
    }

    // ADDING NEW TASK

    vm.register = () => {
      if ($scope.task.projectname === undefined) {
        vm.err = 'Please Select Project Before Adding Task!!!'
      } else {
        mytaskService.createTask($scope.task).then(r => {
          mytaskService.getTasks(vm.MyUserId).then(res => {
            $scope.mytasks = res
            $scope.task.todos = ''
          })
        })
        vm.err = 'undefined'
      }
    }

    // SORTING

    vm.orderByMe = x => {
      vm.myOrderBy = x
    }

    // UPDATE DATA

    $scope.update = myid => {
      $scope.idd = myid
      mytaskService.updateTask($scope.task, $scope.idd)
    }
    vm.check = (myid, myval) => {
      $scope.idd = myid
      $scope.val = myval
      mytaskService.checkTask($scope.idd, myval).then(r => {
        mytaskService.getTasks(vm.MyUserId).then(res => {
          $scope.mytasks = res
          $scope.task.todos = ''
        })
      })
    }

    // DELETE DATA

    vm.delete = myid => {
      $scope.idd = myid
      mytaskService.deleteTask(myid).then(r => {
        mytaskService.getTasks(vm.MyUserId).then(res => {
          $scope.mytasks = res
          $scope.task.todos = ''
        })
      })
    }

    // FETCH DATA FOR UPDATE

    $scope.fetch = myid => {
      $scope.idd = myid
      mytaskService.getTaskDetails($scope.idd).then(data => {
        $scope.task.idd = data.id
        $scope.task.status = data.status
        $scope.task.date = data.date
        $scope.task.todos = data.todos
        $scope.task.description = data.description
      })
    }
  }
])
