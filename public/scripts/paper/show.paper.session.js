console.log('show.paper.session.js is connected');
(function(){
  angular.module('app')
  .component('showPaperSession', {
    controller: controller,
    templateUrl: './scripts/paper/show.paper.session.html'
  })

  controller.$inject = ['API_BASE_URL', '$http']
  function controller (baseUrl, $http){
    const vm = this
    console.log('!!!')

    vm.$onInit = function (){
      console.log('show paper session js');
      // $http.get(`${baseUrl}/api/posts`).then((posts)=>{
      //   vm.posts = posts.data
      //   console.log(vm.posts);
      // })
    }




  }
})()
