'use strict';

/**
 * @ngdoc function
 * @name jasper-nodeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jasper-nodeApp
 */
angular.module('jasper-nodeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
