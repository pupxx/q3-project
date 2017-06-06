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

    vm.$onInit = function (){
      console.log('LANDING.INDEX.JS');
      let today = moment(new Date()).format('YYYY-MM-DD')
      let aWeekAgo = moment().subtract(7,'d').format('YYYY-MM-DD');

      $http.get(`${baseUrl}/api/landing`).then((result)=>{
        temp = result.data
        console.log('all data is: ', temp);
        vm.newArray = temp.map(function(element) {
            let workoutDate = moment(element.date).format('YYYY-MM-DD')
            if (moment(workoutDate).isAfter(aWeekAgo)) {
              element.date = workoutDate
              console.log('element.date / workout date is', element.date)
              return element
            }
  	      })
          console.log('newArray is ', vm.newArray);

      })
    }




  }
})()
