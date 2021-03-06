
(function(){
  angular.module('app')
  .component('paperIndex', {
    controller: controller,
    templateUrl: './scripts/paper/paper.index.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', 'paperService', '$state']

  function controller (baseUrl, $http, paperService, $state){
    const vm = this

    // console.log(paperService);


    vm.selectedExercises = []
    vm.dragControlListeners = {
      itemMoved: function (event) {
        // console.log(vm.selectedExercises)
      }
    }

    vm.$onInit = function (){
      paperService.getExercises().then((exercises)=>{
        vm.exercises = exercises.data
        // console.log(this.exercises);
      })
    }
    // console.log(vm.selectedExercises);

    vm.addPaperSession = function () {
      let paperWorkout = {
        user_id: 1,
        selectedExercises: vm.selectedExercises
      }
      // console.log(paperWorkout);
      paperService.addPaperSession(paperWorkout).then(() => {
        $state.go('showPaperSession')
      })
    }






  }
})()
