angular
  .module('app')
  .controller('AboutController', ['$scope', '$state', '$location', '$anchorScroll', function($scope, $state, $location, $anchorScroll) {
      $scope.$state = $state;
      $scope.gotoAnchor = function(hash) {
	  // set the location.hash to the id of
	  // the element you wish to scroll to.
	  $location.hash(hash);
	  
	  // call $anchorScroll()
	  $anchorScroll();
      };

  }]);
