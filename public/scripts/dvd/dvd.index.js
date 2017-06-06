
(function(){
  angular.module('app')
  .component('dvdIndex', {
    controller: controller,
    templateUrl: './scripts/dvd/dvd.index.html'
  })

  controller.$inject = ['API_BASE_URL', '$http']
  function controller (baseUrl, $http){
    const vm = this

    vm.addWorkout = addWorkout

    vm.$onInit = function (){
      $http.get(`${baseUrl}/api/dvd`).then((allDvd)=>{
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
   $http.post('/api/dvd-session', workout).then(function (response) {
      console.log('yoooo');
      console.log(response.data);
      })
console.log(workout);

  }

  }
})()
