'use strict'

var async = require('async')
module.exports = function(app) {
  // data sources
  var mongoDs = app.dataSources.mongoDs

  // create all models
  async.parallel(
    {
      persons: async.apply(createPersons),

    },
    function(err, results) {
      if (err) throw err
    
    }
  )
  // create Persons
  function createPersons(cb) {
    mongoDs.automigrate('Person', function(err) {
      if (err) return cb(err)
      var Person = app.models.Person
      Person.create(
        [
          {
            name: 'Abebe',
            role: 'admin',
            password: 'ab123',
            email: 'ab@yahoo.com'
          },
          {
            name: 'Biruk',
            role: 'user',
            password: '123',
            email: 'biruk@gmail.com'
          }
        ],
        cb
      )

     
    })
  }
}
