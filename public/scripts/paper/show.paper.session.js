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
    }

    function editWorkout (){
      console.log('controller')
      paperService.editWorkout().then((response)=>{
        console.log('im the patch response:', response);
        vm.singlePaperWorkout[0] = response
        // console.log(response.data);
        // vm.singleWorkout = response
      })
      .then(() => {
        console.log('This is our singlePaperWorkout after edit: ',vm.singlePaperWorkout);
      }).catch((err)=>{
        console.log('There was an error', err);
      })
    }



  }
})()
