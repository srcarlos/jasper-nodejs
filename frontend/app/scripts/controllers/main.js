'use strict';

/**
 * @ngdoc function
 * @name jasperpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jasperpApp
 */
angular.module('jasperpApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
