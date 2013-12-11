angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Pets', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Mr.Swami Venkat', description: 'CEO iNexGen games.' },
    { id: 1, title: 'Mr.Ram', description: 'Project Manager, iNexGen games' },
    { id: 2, title: 'Mr.Karthic', description: 'Project Manager, Beyond Universe Software Solutions.' }
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  }
});
