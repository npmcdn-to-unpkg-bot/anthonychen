angular
    .module('app', [
	'lbServices',
	'ui.router'
    ])
    .run([
        "$rootScope", "$state", "$stateParams", function($rootScope, $state, $stateParams) {
	    $rootScope.$state = $state;
	    $rootScope.$on('$stateChangeSuccess', function() {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	    });
	    return $rootScope.$stateParams = $stateParams;
	}
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
							      $urlRouterProvider) {
	$stateProvider
	    .state('todo', {
		url: 'todo',
		templateUrl: 'views/todo.html',
		controller: 'TodoController'
	    })
	    .state('intro', {
		url: '/intro',
		templateUrl: 'views/intro.html'
	    })
	    .state('about', {
		url: '/about',
		templateUrl: 'views/about.html',
		controller: 'AboutController'
	    })
	    .state('projects', {
		url: '/projects',
		templateUrl: 'views/projects.html'
	    })
	    .state('projectsAquatics', {
		url: '/projects/aquatics',
		templateUrl: 'views/projects.aquatics.html',
		controller: 'ProjectController'
	    })
	    .state('projects3DPrinting', {
		url: '/projects/3d-printing',
		templateUrl: 'views/projects.3dprinting.html',
		controller: 'ProjectController'
	    })
	    .state('projectsCNCRouting', {
		url: '/projects/cnc-routing',
		templateUrl: 'views/projects.cncrouting.html',
		controller: 'ProjectController'
	    })
	    .state('projectsSoftware', {
		url: '/projects/software',
		templateUrl: 'views/projects.software.html',
		controller: 'ProjectController'
	    })
	    .state('resume', {
		url: '/resume',
		templateUrl: 'views/resume.html'
	    })
	    .state('contact', {
		url: '/contact',
		templateUrl: 'views/contact.html'
	    });
	$urlRouterProvider.otherwise('/intro');
    }]);
