console.log('config file connected');

(function() {
  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$locationProvider']

  function config($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true)
    //
    $stateProvider
    // .state({
    //   // NOTE: What is redirectTo doing? What is its value?
    //   name: 'home', url: '/', redirectTo: 'story.index'
    // })
    // .state({
    //   // NOTE: What is this doing?
    //   name: 'story', templateUrl: './scripts/stories/template.html'
    // })
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

    // .state({
    //   name: 'story.show', url: '/stories/:id', component: 'stories.show'
    // })
  }
}())
