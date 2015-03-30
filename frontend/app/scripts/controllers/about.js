'use strict';

/**
 * @ngdoc function
 * @name jasperpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jasperpApp
 */
angular.module('jasperpApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
