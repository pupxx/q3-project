(function(){
  angular.module('app')
  .component('historyIndex', {
    controller: controller,
    templateUrl: './scripts/history/history.index.html'
  })

  controller.$inject = ['API_BASE_URL', '$http']
  function controller (baseUrl, $http){
    const vm = this

    vm.$onInit = function (){
      $http.get(`${baseUrl}/api/landing`).then((res)=>{
        vm.history = res.data
        console.log(vm.history);
      })
    }




  }
})()
