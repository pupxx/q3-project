console.log('index.js is connected');
(function(){
  angular.module('app')
  .component('paperIndex', {
    controller: controller,
    templateUrl: './scripts/paper/paper.index.html'
  })

  controller.$inject = ['API_BASE_URL', '$http']
  function controller (baseUrl, $http){
    const vm = this
    console.log('!!!')

    vm.$onInit = function (){
      console.log('paper index js');
      // $http.get(`${baseUrl}/api/posts`).then((posts)=>{
      //   vm.posts = posts.data
      //   console.log(vm.posts);
      // })
    }




  }
})()
