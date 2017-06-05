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
      name: 'dvdIndex', url: '/home', component: 'dvdIndex'
    })
    // .state({
    //   name: 'story.show', url: '/stories/:id', component: 'stories.show'
    // })
  }
}())
