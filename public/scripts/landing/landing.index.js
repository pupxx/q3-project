console.log('landing.index.js is connected');
(function(){
  angular.module('app')
  .component('landingIndex', {
    controller: controller,
    templateUrl: './scripts/landing/landing.index.html'
  })

  controller.$inject = ['API_BASE_URL', '$http']
  function controller (baseUrl, $http){
    const vm = this

    // get last 7 days of dates, return it as an array of strings
    vm.getDateRange = function (begin, end) {
      console.log("getDateRange", begin, end)
      let now = begin.clone()
      let dates = []

      while (now.isBefore(end)){
        dates.push(now.format('YYYY-MM-DD'))
        now.add('days', 1
      )}
      return dates
    }

    // INIT
    vm.$onInit = function (){
      let today = moment(new Date())
      let aWeekAgo = moment().subtract(7,'d')
      let weekObject = {}
      vm.lastSevenDays = vm.getDateRange(aWeekAgo, today)
      vm.lastSevenDays = vm.lastSevenDays.map(function(element) {
        element = {
          date: element,
          shortDate: moment(element).format('DD/MM'),
          dayOfWeek: moment(element).format('ddd')
        }
        return element
      })

      $http.get(`${baseUrl}/api/landing`)
      .then((result)=>{
        let workoutSessions = result.data

        // filter the array of all workouts to just those that occurred in the last week
        vm.weeklyWorkouts = workoutSessions.filter(function(element) {
          let workoutDate = moment(element.date).format('YYYY-MM-DD')
          let dayOfWeek = moment(element.date).format('dddd')

          if (moment(workoutDate).isAfter(aWeekAgo)) {
            element.id = element.id
            element.date = moment(workoutDate).format('YYYY-MM-DD')
            element.formattedDate = (moment(workoutDate).format('YYYY-MM-DD')).toString()
            element.displayDate = moment(workoutDate).format('DD/MM')
            element.dayOfWeek = dayOfWeek
            element.noWorkout = ''
            return element
          }
	      }) // end filter
      }) // end of the .then
    } // end init
  }
})()
