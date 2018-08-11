myapp.service('myprojectService', [
  'Restangular',
  function(Restangular) {
    let vm = this

    vm.getProjects = () => {
      let projects = Restangular.all('/projects')
      return projects.getList()
    }

    vm.createProject = data => {
      let baseProjects = Restangular.all('/projects').post(data)
      return baseProjects
    }

    vm.deleteProject = id => {
      let baseTasks = Restangular.one('/projects', id).remove()
      return baseTasks
    }
  }
])
