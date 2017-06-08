(function() {
  'use strict';

  angular
    .module('app')
    .service('dvdService', dvdService)

  dvdService.$inject = ['API_BASE_URL','$http']


  function dvdService(baseUrl, $http) {



    this.postWorkout = (workout) => {
      return $http.post('/api/dvd-session', workout).then((singleWorkout) => {
        // this.singleDvdWorkout.push(singleWorkout.data[0])
        this.singleDvdWorkout = singleWorkout.data[0];
        console.log(this.singleDvdWorkout);
      });
    }

    this.getDvds = function(){
      return $http.get(`${baseUrl}/api/dvd`)
    }
  }

})()
