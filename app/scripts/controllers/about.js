'use strict';

/**
 * @ngdoc function
 * @name tylerPortApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tylerPortApp
 */
angular.module('tylerPortApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
