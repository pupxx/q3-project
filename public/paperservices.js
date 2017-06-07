(function() {
  'use strict';

  angular
    .module('app')
    .service('paperService', paperService)

  paperService.$inject = ['API_BASE_URL','$http']


  function paperService(baseUrl, $http) {



    this.getExercises  = ()=>{
      return $http.get(`${baseUrl}/api/build-from-exercises`)
    }


  }

})()
