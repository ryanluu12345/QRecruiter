/* Configures App */
const app = angular.module('reg', [
  'ui.router',
]);

app
  .config([
    '$httpProvider', function($httpProvider) {
      
    }]);

/* Make all requests here */
app
  .factory('UserService', [
  '$http',
  function($http){
  
    var users = '/api/v1/users';
  
    return {
      getUser: function() {
        return $http.get(users);
      }

      /* Put the name of the functions on the left and define the functions on the right */

    };
  }
]);    
    
/* Controller for the login page */
app.controller('LoginCtrl', ['$scope', 'UserService', function($scope, UserService){
  $scope.user = null;
  UserService.getUser()
    .success(function(data) {
      $scope.user = data;
    });
}]);    