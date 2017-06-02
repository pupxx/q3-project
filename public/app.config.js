(function() {
  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$locationProvider']

  function config($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true)

  //   $stateProvider
  //   .state({
  //     // NOTE: What is redirectTo doing? What is its value?
  //     name: 'home', url: '/', redirectTo: 'story.index'
  //   })
  //   .state({
  //     // NOTE: What is this doing?
  //     name: 'story', templateUrl: './scripts/stories/template.html'
  //   })
  //   .state({
  //     // NOTE: How is this state related to the above state?
  //     name: 'story.index', url: '/stories', component: 'stories.index'
  //   })
  //   .state({
  //     name: 'story.show', url: '/stories/:id', component: 'stories.show'
  //   })
  // }
}())
