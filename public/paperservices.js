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
        // console.log(singlePaperWorkout);
        this.singlePaperWorkout = singlePaperWorkout.data;
        // console.log(this.singlePaperWorkout.id);
        // console.log('from paperservices file');

        // console.log(this.singlePaperWorkout, 'FRONT END');
      });
    }

    this.editWorkout = ()=>{
      console.log('helloooooooooo', this.singlePaperWorkout)
      return $http.patch(`/api/paper-session/${this.singlePaperWorkout['0'].paper_session_id}`, this.singlePaperWorkout)
    }


  }

})()
