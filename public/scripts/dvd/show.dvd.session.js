console.log('show.dvd.session.js is connected');
(function(){
  angular.module('app')
  .component('showDvdSession', {
    controller: controller,
    templateUrl: './scripts/dvd/show.dvd.session.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', 'dvdService']
  function controller (baseUrl, $http, dvdService){
    const vm = this

    // vm.singleDvdWorkout = dvdService.singleDvdWorkout



    vm.$onInit = function (){
      console.log('show dvd session js');
      console.log('dvd service on init', dvdService);
      vm.singeleDvdWorkout = dvdService.singleDvdWorkout
    }





  }
})()
