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
  
    const usersRoute = '/api/v1/users';
    const recruitersRoute = '/api/v1/recruiters';

  
    return {
      getUser: function() {
        return $http.get(usersRoute);
      },
      createUser: function(user) {
        return $http.post(usersRoute + "/create", {
          user
        });
      },
      updateUserProfile: function(
        skills, 
        availability,
        picture,
        resume, 
        userId) {
        return $http.post(usersRoute + '/updateProfile/' + userId, {
          skills: skills,
          availability: availability,
          picture: picture,
          resume: resume,
        });
      },
      loadApplicantsForJob: function(job) {
        return $http.get(recruitersRoute + '/getAllForJob/' + job);
      }

      /* Put the name of the functions on the left and define the functions on the right */

    };
  }
]);  

/* Controller for the recruiter page */
app.controller('RecruiterCtrl', ['$scope', 'UserService', function($scope, UserService){
  $scope.frontendApplicants = null;
  $scope.backendApplicants = null;

  UserService.loadApplicantsForJob('backendEngineering')
    .success(data => {
      $scope.backendApplicants = data;
      console.log($scope.backendApplicants);
    })

  UserService.loadApplicantsForJob('frontendEngineering')
    .success(data => {
      $scope.frontendApplicants = data;
      console.log($scope.frontendApplicants);
    })
  
}]);    

/* Controller for the user page */
app.controller('UserCtrl', ['$scope', 'UserService', function($scope, UserService){
  $scope.username = '';
  $scope.skills = '';
  $scope.availability = '';
  $scope.picture = '';
  $scope.resume = '';

  $scope.$watch('skills', function(skills) {
    $scope.skills = skills;
  });

  $scope.$watch('picture', function(picture) {
    $scope.picture = picture;
  });

  $scope.$watch('resume', function(resume) {
    $scope.resume = resume;
  });

  $scope.updateProfile = function() {
    $scope.studentId = 123;
    if (localStorage.hasOwnProperty("studentId")) {
      $scope.studentId = localStorage.getItem("studentId")
    }
    UserService.updateUserProfile(
      $scope.skills, 
      $scope.availability,
      $scope.picture,
      $scope.resume,
      $scope.studentId)
      .success(response => {
        swal('Successfully updated profile!', 'Welcome ' + response.name, 'success');
      })
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
        localStorage.setItem("name", response.name);
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


