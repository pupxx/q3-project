console.log('module file connected');

(function(){
  'use strict'
  angular.module('app', ['ui.router', 'angularMoment', 'as.sortable'])
  .constant('API_BASE_URL', 'http://localhost:5050')


})()
