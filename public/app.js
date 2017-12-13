// window.loginApp = angular.module('loginApp',[]);

(function() {
  angular.module('myApp', [
    'myApp.login',
    'myApp.profile',
    'myApp.serv',
    'ngRoute'
  ])
  .config(config);

  function config($routeProvider, $locationProvider) {
    $routeProvider

    .when('/', {
      templateUrl: 'app/login/login.html',
      controller: 'loginCtrl',
      controllerAs: 'Login'
    })

    .when('/profile', {
      templateUrl: 'app/profile/profile.html',
      controller: 'profileCtrl',
      controllerAs: 'Profile'
    })

    .otherwise({redirectTo: "/"});
  }
})();
