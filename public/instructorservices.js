(function() {
  'use strict';

  angular
    .module('app')
    .service('instructorService', instructorService)

  instructorService.$inject = ['API_BASE_URL','$http']


  function instructorService(baseUrl, $http) {



    // this.getInstructors  = ()=>{
    //   return $http.get(`${baseUrl}/api/instructor-list`)
    // }


  }

})()
