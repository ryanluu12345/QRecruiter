angular.module('reg')
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {

      $urlRouterProvider.otherwise('/404');

      const recruiterState = {
        name: 'recruiter',
        url: '/recruiter',
        template: '<h3>You are on the recruiter page!</h3>'
      }

      const userState = {
        name: 'user',
        url: '/user',
        template: '<h3>You are on the user page</h3>'
      }

      const signupState = {
        name: 'signup',
        url: '/signup',
        templateUrl: 'views/signup/signup.html',
      }

      const loginState = {
        name: 'login',
        url: '/login',
        templateUrl: 'views/login/login.html',
      }

      $stateProvider.state(recruiterState);
      $stateProvider.state(userState);
      $stateProvider.state(signupState);
      $stateProvider.state(loginState);
}]);