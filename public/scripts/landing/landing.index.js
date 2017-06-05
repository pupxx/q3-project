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
      // $http.get(`${baseUrl}/api/posts`).then((posts)=>{
      //   vm.posts = posts.data
      //   console.log(vm.posts);
      // })
    }




  }
})()
