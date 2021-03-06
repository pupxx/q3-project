(function(){
  angular.module('app')
  .component('historyIndex', {
    controller: controller,
    templateUrl: './scripts/history/history.index.html'
  })

  controller.$inject = ['API_BASE_URL', '$http']
  function controller (baseUrl, $http){
    const vm = this
    vm.yourWorkouts = []

    vm.$onInit = function (){
      $http.get(`${baseUrl}/api/landing`).then((res)=>{
        let calendar = vm.get_calendar(moment().year(), moment().month())

        vm.history = res.data
        vm.weeks = calendar.map(function(week){
          dayList = []

          week.by('days', function(day){
            var dayString = day.format('D');
            var shouldDisplay = vm.showDay(dayString)
            var day = {
              day: dayString,
              hasWorkout: shouldDisplay,

            }
            // console.log('ughlih ', vm.selectedWorkouts);
            // if (vm.selectedWorkouts != null) {
            //   vm.yourWorkouts.push(vm.selectedWorkouts[0])
            // }

            dayList.push(day)
          })

          return dayList
        })
      })
    }

    vm.showDay = function (day) {
      vm.selectedWorkouts = vm.history.filter((workout) => {
        return moment(workout.date).format('D') === day
      })
      if (vm.selectedWorkouts.length > 0) {
        vm.yourWorkouts.push(vm.selectedWorkouts)
      }

      // console.log('selecte wo', vm.selectedWorkouts);
      return vm.selectedWorkouts.length > 0;
    }

    // CALENDAR LINK https://jsfiddle.net/guillaumepiot/fg9mkygo/2/
    var calendar,
    endDay,
    firstDay,
    firstWeekDay,
    i,
    lastWeekDay,
    len,
    month,
    monthRange,
    startDate,
    week,
    weekRange,
    weeks,
    year,
    indexOf = [].indexOf || function(item) {
      for (var i = 0, l = this.length; i < l; i++) {
        if (i in this && this[i] === item)
        return i;
      }
      return -1;
    };

    vm.get_calendar = function (year, month){
      vm.currentMonth = (month + 1).toString()
      vm.currentMonth = moment(vm.currentMonth, 'MM').format('MMMM')
      startDate = moment([year, month]);
      firstDay = moment(startDate).startOf('month');
      endDay = moment(startDate).endOf('month');
      monthRange = moment.range(firstDay, endDay);

      weeks = [];

      monthRange.by('days', function(moment) {
        var ref;
        if (ref = moment.week(), indexOf.call(weeks, ref) < 0) {
          return weeks.push(moment.week());
        }
      });

      calendar = [];

      for (i = 0, len = weeks.length; i < len; i++) {
        week = weeks[i];
        if (i > 0 && week < weeks[i-1]){
          // We have switched to the next year

          firstWeekDay = moment([year, month]).add(1, "year").week(week).day(1);
          lastWeekDay = moment([year, month]).add(1, "year").week(week).day(7);
        }
        else{
          firstWeekDay = moment([year, month]).week(week).day(1);
          lastWeekDay = moment([year, month]).week(week).day(7);
        }
        weekRange = moment.range(firstWeekDay, lastWeekDay);
        calendar.push(weekRange);
      }
      return calendar;
    }

  }
})()
