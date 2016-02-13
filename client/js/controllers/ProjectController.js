angular
  .module('app')
  .controller('ProjectController', ['$scope', '$state', '$location', 'ProjectEntry', function($scope, $state, $location, $ProjectEntry) {
      $scope.projectEntries = [];

      function getProjectEntries() {
	  $ProjectEntry
	      .find({
		  filter: {
		      where: {
			  type: $scope.projectEntryType
		      }
		  }
	      })
	      .$promise
	      .then(function(results) {
		  $scope.projectEntries = results;
	      });
      }


      $scope.$watch('projectEntryType', function() {
	  getProjectEntries();
      });

      $scope.addProjectEntry = function() {
	  $scope.newProjectEntry.ctime = new Date();
	  $scope.newProjectEntry.published = true;
	  $scope.newProjectEntry.type = $scope.projectEntryType;
	  $ProjectEntry
	      .create($scope.newProjectEntry)
	      .$promise
	      .then(function(projectEntry) {
		  $scope.newProjectEntry = '';
		  getProjectEntries();
	      });
      };
  }]);
