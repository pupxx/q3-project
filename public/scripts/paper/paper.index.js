
(function(){
  angular.module('app')
  .component('paperIndex', {
    controller: controller,
    templateUrl: './scripts/paper/paper.index.html'
  })

  controller.$inject = ['API_BASE_URL', '$http']
  function controller (baseUrl, $http){
    const vm = this

    vm.$onInit = function (){
      $http.get(`${baseUrl}/api/build-from-exercises`).then((allPaper)=>{
        vm.paper = allPaper.data
        console.log(vm.paper);
      })
    }




  }
})()
