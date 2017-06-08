(function() {
  'use strict';

  angular
    .module('app')
    .service('paperService', paperService)

  paperService.$inject = ['API_BASE_URL','$http']


  function paperService(baseUrl, $http) {

    this.singlePaperWorkout;

    this.getExercises  = ()=>{
      return $http.get(`${baseUrl}/api/build-from-exercises`)
    }

    this.addPaperSession = (paperWorkout) => {
      return $http.post('/api/paper-session', paperWorkout).then((singlePaperWorkout) => {
        this.singlePaperWorkout = singlePaperWorkout.data;
        console.log(this.singlePaperWorkout);
        console.log('from paperservices file');
        // console.log(this.singlePaperWorkout, 'FRONT END');
      });
    }


  }

})()
