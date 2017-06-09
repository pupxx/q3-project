console.log('config file connected');

(function() {
  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$locationProvider']

  function config($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true)
    //
    $stateProvider

    .state({
      name: 'home', url: '/', redirectTo: 'landingIndex'
    })

    .state({
      name: 'landingIndex', url: '/home', component: 'landingIndex'
    })

    .state({
      name: 'paperIndex', url: '/paper', component: 'paperIndex'
    })

    .state({
      name: 'dvdIndex', url: '/dvd', component: 'dvdIndex'
    })

    .state({
      name: 'showDvdSession', url: '/dvd-session', component: 'showDvdSession'
    })

    .state({
      name: 'showPaperSession', url: '/paper-session', component: 'showPaperSession'
    })

    .state({
      name: 'historyIndex', url: '/history', component: 'historyIndex'
    })

    // .state({
    //   name: 'story.show', url: '/stories/:id', component: 'stories.show'
    // })
  }
}())
