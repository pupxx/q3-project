console.log('index.js is connected');
(function(){
  angular.module('app')
  .component('dvdIndex', {
    controller: controller,
    templateUrl: './scripts/dvd/dvd.index.html'
  })

  controller.$inject = ['API_BASE_URL', '$http']
  function controller (baseUrl, $http){
    const vm = this
    console.log('!!!')

    vm.$onInit = function (){
      console.log('hi');
      // $http.get(`${baseUrl}/api/posts`).then((posts)=>{
      //   vm.posts = posts.data
      //   console.log(vm.posts);
      // })
    }




  }
})()
