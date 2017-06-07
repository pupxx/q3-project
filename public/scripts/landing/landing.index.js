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

    // get last 7 days of dates, return it as an array
    vm.getDateRange = function (begin, end) {
      let now = begin.clone()
      let dates = []

      while (now.isBefore(end) || now.isSame(end)) {
        dates.push(now.format('YYYY-MM-DD'))
        now.add('days', 1)
      }
      return dates
    }


    // INIT
    vm.$onInit = function (){
      let today = moment(new Date())
      let aWeekAgo = moment().subtract(7,'d')
      let lastSevenDays = vm.getDateRange(aWeekAgo, today)
      let lazySlug = 'No workout'

      $http.get(`${baseUrl}/api/landing`).then((result)=>{
        let temp = result.data

        // make an array of all workouts that occurred in the last week
        vm.newArray = temp.map(function(element) {
          let workoutDate = moment(element.date).format('YYYY-MM-DD')
          let dayOfWeek = moment(element.date).format('dddd')

          if (moment(workoutDate).isAfter(aWeekAgo)) {
            element.date = moment(workoutDate).format('YYYY-MM-DD')
            element.displayDate = moment(workoutDate).format('DD/MM')
            element.dayOfWeek = dayOfWeek
            element.noWorkout = ''
            return element
          }
	      })
        console.log('newArray is ', vm.newArray);
        lastSevenDays.forEach((day, index) => {
          // console.log('day is ', day)
          console.log(day == vm.newArray[0].date)

          // check to make sure there is a newArray item
          if (vm.newArray[index]) {
            if (vm.newArray[index].date == day) {
              console.log('if')
            }
          else {
            vm.newArray[index].noWorkout = 'No workout'
            console.log(vm.newArray[index].noWorkout);
          }

          }
        })
      })
    }

  }
})()
