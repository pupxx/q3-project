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

    vm.$onInit = function (){
      vm.test = 'Hi'
      vm.singlePaperWorkout = paperService.singlePaperWorkout
    }




  }
})()
