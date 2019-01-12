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
  
    var usersRoute = '/api/v1/users';
  
    return {
      getUser: function() {
        return $http.get(usersRoute);
      },
      createUser: function(user) {
        return $http.post(usersRoute + "/create", {
          user
        });
      },

      /* Put the name of the functions on the left and define the functions on the right */

    };
  }
]);    
    

/* Controller for the recruiter page */
app.controller('RecruiterCtrl', ['$scope', 'UserService', function($scope, UserService){
  $scope.location = null;
  $scope.position = null;
  UserService.getUser()
    .success(function(data) {
      $scope.user = "y";
    });
}]);    

/* Controller for the user page */
app.controller('UserCtrl', ['$scope', 'UserService', function($scope, UserService){
  $scope.username = null;
  $scope.skills = null;

  $scope.add = function() {
    var f = document.getElementById('file').files[0],
        r = new FileReader();

    r.onloadend = function(e) {
      var data = e.target.result;
      //send your binary data via $http or $resource or do anything else with it
    }

    r.readAsBinaryString(f);
  }
}]);    

/* Controller for the signup page */
app.controller('SignUpCtrl', ['$scope',
'$location', 
'UserService', 
function($scope, $location, UserService){
  $scope.user = {
    username: '',
    pass: '',
    email: '',
    phone: '',
  };

  $scope.$watch('username', function(name) {
    $scope.user.username = name;
  });

  $scope.$watch('pass', function(pass) {
    $scope.user.pass = pass;
  });

  $scope.$watch('email', function(email) {
    $scope.user.email = email;
  });

  $scope.$watch('phone', function(phone) {
    $scope.user.phone = phone;
  })

  $scope.createUser = function() {
    UserService
      .createUser($scope.user)
      .success(function(response) {
        swal("Profile Created!", "You now have an account with QRecruiter!", "success");
        localStorage.setItem("studentId", response._id);
        $location.url('/user');
      });
  }

}]);    

/* Controller for the login page */
app.controller('LoginCtrl', ['$scope', 'UserService', function($scope, UserService){
  $scope.username = null;
  $scope.pasword = null; 
  UserService.getUser()
    .success(function(data) {
      $scope.username = null;
    });
}]);    

