
(function(){
  angular.module('app')
  .filter('rawHtml', ['$sce', function($sce){
    return function(val) {
      return $sce.trustAsHtml(val);
    };
  }])
  .component('dvdIndex', {
    controller: controller,
    templateUrl: './scripts/dvd/dvd.index.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', 'dvdService']
  function controller (baseUrl, $http, dvdService){
    const vm = this

    vm.addWorkout = addWorkout

    vm.$onInit = function (){
      dvdService.getDvds().then((allDvd)=>{
        vm.dvds = allDvd.data
      })
    }

    vm.selectedDvd = []
    vm.dragControlListeners = {}


    function addWorkout(){
      let workout = {
        user_id: 1,
        workout_id: vm.selectedDvd
      }
      dvdService.postWorkout(workout)
      .catch((err) => {
        console.error(err)
      })
    }
  }
})()
