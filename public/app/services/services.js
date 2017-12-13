(function () {
	angular
		.module('myApp.serv', [])
		.factory('serv', serv);

    function serv($http, $location, $window) {
      return {
        login: login,
        updatePass: updatePass
      };


      function login(user) {
        return $http({
          method: 'POST',
          url: '/api/login',
          data: user
        })
        .then(function(res) {
            return res.data;
        });
      }

      function updatePass(newPass) {
        return $http({
          method: 'PUT',
          url: '/user/update',
          data: newPass
        })
        .then(function (res) {
          return res.data;
        });
      }
    }
})();
