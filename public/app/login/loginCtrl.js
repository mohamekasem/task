//
// angular.module()
// .controller('loginCtrl',['$scope','$http',($scope,$http) => {
//
//     $scope.login= () =>
//     {
//         $http.post('/api/login', {email:$scope.email , password:$scope.password}).then(r => {
//             $scope.user = r.data;
//         }, e => {
//             $scope.errorMessage = e.data.message;
//         });
//     }
// }]);


// not using es6 to support all the browsers
(function(){
  angular
    .module('myApp.login', [])
		.controller('loginCtrl', loginCtrl);

    function loginCtrl($scope, $window, $location, $rootScope, serv) {
      var vm = this;
      vm.login = login;
      vm.user = {email: '', password: ''};

      function login() {
        serv.login(vm.user)
          .then(function (userInfo) {
            if(userInfo.token){
              $window.localStorage.setItem('token', userInfo.token);
              $location.path('/profile');
              $rootScope.userInfo = userInfo;
            }
          })
          .catch(function (err) {
             $scope.errorMessage = err.data.message;
          });
        }
      }
  })();
