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


    vm.$onInit = function (){
      console.log(Date.now());
      console.log('show dvd session js');
      vm.singeleDvdWorkout = dvdService.singleDvdWorkout
    }





  }
})()
