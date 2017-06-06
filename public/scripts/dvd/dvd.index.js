
(function(){
  angular.module('app')
  .component('dvdIndex', {
    controller: controller,
    templateUrl: './scripts/dvd/dvd.index.html'
  })

  controller.$inject = ['API_BASE_URL', '$http']
  function controller (baseUrl, $http){
    const vm = this

    vm.$onInit = function (){
      $http.get(`${baseUrl}/api/dvd`).then((allDvd)=>{
        vm.dvds = allDvd.data
        console.log(vm.dvds);
      })
    }

    vm.selectedDvd = []

    vm.dragControlListeners = {

     }


  }
})()
