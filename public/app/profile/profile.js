(function() {
  angular.module('myApp.profile', [])
    .controller('profileCtrl', profileCtrl);

    function profileCtrl($scope,serv, $rootScope) {
      var vm = this;
      vm.updatePass = updatePass;
      vm.password = '';
      vm.userInfo = $rootScope;

      // if()
      function updatePass (){
        serv.updatePass(vm.password)
          .then(function(msg) {
          });
      }
    }
})();
