console.log('show.paper.session.js is connected');
(function(){
  angular.module('app')
  .component('showPaperSession', {
    controller: controller,
    templateUrl: './scripts/paper/show.paper.session.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', 'paperService']
  function controller (baseUrl, $http, paperService){
    const vm = this

    vm.editWorkout = editWorkout

    vm.$onInit = function (){
      vm.singlePaperWorkout = paperService.singlePaperWorkout
      var singleWorkout = vm.singlePaperWorkout[0]

      vm.currentWorkout = {
        id: singleWorkout.paper_session_id,
        calories_burned: singleWorkout.calories_burned,
        max_heart_rate: singleWorkout.max_heart_rate,
        average_heart_rate: singleWorkout.average_heart_rate,
        notes: singleWorkout.notes
      }
    }

    function editWorkout (){
      var id = vm.currentWorkout.id
      delete vm.currentWorkout.id

      paperService.editWorkout(id, vm.currentWorkout).then((response)=>{
        console.log('im the patch response:', response);
        vm.currentWorkout.id = response.data[0].id
        // vm.singlePaperWorkout[0] = response
        // console.log(response.data);
        // vm.singleWorkout = response
      }).catch((err)=>{
        console.log('There was an error', err);
      })
    }



  }
})()
