console.log('index.js is connected');
(function(){
  angular.module('app')
  .component('landingIndex', {
    controller: controller,
    templateUrl: './scripts/landing/landing.index.html'
  })

  controller.$inject = ['API_BASE_URL', '$http']
  function controller (baseUrl, $http){
    const vm = this
    console.log('!!!')

    vm.$onInit = function (){
      console.log('landing index js');
      let today = new Date()
      let formattedToday = moment(today).format('YYYY-MM-DD')
      let dateFrom = moment().subtract(7,'d').format('YYYY-MM-DD');
      console.log('formattedToday is ', formattedToday);

      console.log('dateFrom is ', dateFrom)

      $http.get(`${baseUrl}/api/landing`).then((result)=>{
        vm.result = result.data
        console.log(vm.result);
      })
    }




  }
})()
