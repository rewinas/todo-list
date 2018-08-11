myapp.service('mytaskService', [
  'Restangular',

  function(Restangular) {
    let vm = this

    vm.getProjects = () => {
      let projects = Restangular.all('/projects')
      return projects.getList()
    }
    vm.getTasks = md => {
      let tasks = Restangular.all('/tasks')

      return tasks.getList()
    }
    vm.getTasks = md => {
      let tasks = Restangular.all('/tasks')

      return tasks.getList({
        filter: {
          where: {
            ownerId: md
          }
        }
      })
    }

    // GETTING DETAILS OF TASKS

    vm.getTaskDetails = id => {
      let details = Restangular.one('/tasks/' + id)
      return details.get()
    }

    // COUNT NUMBER OF TASKS

    vm.count = () => {
      let baseTasks = Restangular.one('/tasks/count')
      return baseTasks
    }

    // COUNT NUMBER OF PROJECTS

    vm.count2 = () => {
      let baseProjects = Restangular.one('/projects/count')
      return baseProjects
    }
    // CHECK THE STATUS OF TASK

    vm.checkTask = (id, val) => {
      let baseTasks = Restangular.one('/tasks', id)
        .get()
        .then(task => {
          task.status = val
          // $state.reload("mtask");
          task.put()
        })
      return baseTasks
    }

    // UPDATE TASK

    vm.updateTask = (data, id) => {
      let baseTasks = Restangular.one('/tasks', id)
      baseTasks
        .get()
        .then(task => {
          task.date = data.date
          task.status = data.status
          task.todos = data.todos
          task.description = data.description
          return task.put()
        })
        .then(() => {
          $state.reload('mtask')
        })
    }

    // CREATE NEW TASK

    vm.createTask = data => {
      let baseTasks = Restangular.all('/tasks')
        .post(data)
        .then(() => {})

      return baseTasks
    }

    // DELETE TASK

    vm.deleteTask = id => {
      let baseTasks = Restangular.one('/tasks', id).remove()
      return baseTasks
    }
  }
])
