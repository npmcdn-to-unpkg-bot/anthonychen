angular
  .module('app')
  .controller('ProjectController', ['$scope', '$state', '$location', 'ProjectEntry', function($scope, $state, $location, $ProjectEntry) {
      $scope.projectEntries = [];
      function getProjectEntries() {
	  $ProjectEntry
	      .find()
	      .$promise
	      .then(function(results) {
		  $scope.projectEntries = results;
	      });
      }
      getProjectEntries();
  }]);
