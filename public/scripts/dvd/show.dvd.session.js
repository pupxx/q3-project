console.log('show.dvd.session.js is connected');
(function(){
  angular.module('app')
  .component('showDvdSession', {
    controller: controller,
    templateUrl: './scripts/dvd/show.dvd.session.html'
  })

  controller.$inject = ['API_BASE_URL', '$http']
  function controller (baseUrl, $http){
    const vm = this

    


    vm.$onInit = function (){
      console.log('show dvd session js');
      // $http.get(`${baseUrl}/api/posts`).then((posts)=>{
      //   vm.posts = posts.data
      //   console.log(vm.posts);
      // })
    }




  }
})()
