angular
  .module('app')
  .controller('AboutController', ['$scope', '$state', '$location', '$anchorScroll', function($scope, $state, $location, $anchorScroll) {
      $anchorScroll.yOffset = 60;
      $scope.$state = $state;
      $scope.gotoAnchor = function(hash) {
	  $location.hash(hash);
	  $anchorScroll();
      };

  }]);
