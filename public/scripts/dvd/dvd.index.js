// console.log('index.js is connected');
(function(){
  angular.module('app')
  .component('dvdIndex', {
    controller: controller,
    templateUrl: './scripts/dvd/dvd.index.html'
  })

  controller.$inject = ['API_BASE_URL', '$http']
  function controller (baseUrl, $http){
    const vm = this
    // console.log('!!!')

    vm.$onInit = function (){
      // console.log('dvd index js');
      $http.get(`${baseUrl}/api/dvd`).then((allDvd)=>{
        console.log(allDvd);
        vm.dvd = allDvd.data
        // console.log(vm.dvd);
      })
    }




  }
})()
