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
        console.log('single paper workout in service:', singlePaperWorkout);
        this.singlePaperWorkout = singlePaperWorkout.data;
        // console.log(this.singlePaperWorkout.id);
        // console.log('from paperservices file');

        // console.log(this.singlePaperWorkout, 'FRONT END');
      });
    }

    this.editWorkout = (id, body)=>{
      return $http.patch(`/api/paper-session/${id}`, body)
    }


  }

})()
