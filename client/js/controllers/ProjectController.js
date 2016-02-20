angular
  .module('app')
  .controller('ProjectController', ['$scope', '$state', '$location', 'ProjectEntry', '$sanitize', function($scope, $state, $location, $ProjectEntry, $sanitize) {
      $scope.projectEntries = [
	  {type: "Aquatics", published: true, ctime: new Date("2016-02-19"), title: "Floating Fish Wall", 
	   content: "<p class='lead'>I wanted to do something really special and unusual with my fish store to make it stand out more.  I decided to float my livestock tanks on a wall using the very popular Mr Aqua 12 Gallon long tanks in conjunction with Elfa shelving.</p><img class='img-responsive' src='/media/projects/aquatics/storewall.jpg'><h3>Specifications</h3><ul><li>System Volume: Approximately 360 gallons.</li><li>Dimensions: Approximately 12 ft x 7 ft x 1.5 ft</li><li>Tanks: Mr Aqua MA-730 12 Gallon Long.</li><li>Lighting: Ecoxotic 36\" Stunner 12000K/445nm Royal Blue LEDs.  CurrentUSA TrueLumen Pro 36\" 8000K LEDs</li></ul><p>Most fish stores have their fish tanks on sturdy wooden stands made of 2x4 lumber or something similar.  I wanted to maximize the amount of working room around the tank and with lumber, it just wouldn't be able to make the length of the span without taking up more vertical space.  Aluminum and steel is expensive and would require either lots of fasteners or it'd be stuck to a custom size after welding.  This left few options.  Fortunately, there's a Container Store near my home and I'd been by often enough to know that they had an elegant wall mount solution for shelving.  The question was, would it work for my application?</p><p>I was able to find the Elfa technical specifications which describe the weight per linear foot that the shelving system would support.  After doing a few calculations, it looked like I'd be at about 70% of capacity after filling the tanks with water up to the overflow line.  To me, this seemed safe enough and worth the risk.</p><p>Plumbing this system was pretty interesting.  I had to drill two holes in every tank for a total of 32 holes.  I used one pump which was attached to a 1-inch PVC manifold with 1/2-inch barbed fittings which distributed the water to all the tanks.  Every tank had a loc-line fitting with a valve to help distribute the flow of water equally to every tank.  Behind every tank ran a 2-inch PVC line with open T-fittings in which the 1-inch overflows from the tanks would drain into.  These 2-inch drain lines then connected to a central 3-inch drain that dumped water directly into a central sump system.  The central sump was connected to three other refugiums containing live rock with a high 1.5-inch bulkhead fitting.  Water was also pumped into the furthest refugium which then caused water to flow through all refugiums back into the central sump.</p><p>For lighting, I used Ecoxotic Stunner LEDs mounted to an aluminum T that was centrally mounted to the wall.  The tanks are very shallow and I just needed a great looking color to showcase the livestock in these tanks.  There weren't any straightforward power supplies to drive the LEDs so I bought a 200W DC power supply off eBay and wired it all together put on a simple mechanical timer.  The refugium LEDs are TrueLumen Pros from Current USA.</p>"},
	  {type: "Software", published: true, ctime: new Date("2016-02-19"), title: "My First Project: MIT Market", 
	   content: "<p class='lead'>Project-based learning has been a great way for me to learn.  MIT Market was my first attempt at a PHP-based website with database integration back in 2005.</p><img class='img-responsive' src='/media/projects/software/MITMarket.png'><p>Before I attended MIT, I had the summer mostly free so I decided to teach myself how to make a more complex website than the HTML-only websites I had made in the past.  At the time, HTML-only websites had some software-based tricks to simplify development through templates.  The most attractive thing about PHP was that you could include files from one to another!  To me, this was an amazing concept that gave me an initial glimpse into the concept of abstraction.</p><p>At the same time, I started to explore databases.  At the time, I was already used to the idea of storing data in a flat file and using a database was in my mind an extension of the concept with many more benefits.  Databases could do a lot of the heavy-lifting work of sorting, filtering, and in particular, aggregating of data that I used to have to write custom instructions for.</p><p>In my mind, learning new programming languages and software-related concepts was a really good way to improve my efficiency.  Software is an ever-evolving tool that can be greatly beneficial if understood and properly utilized.</p>"},
	  {type: "Software", published: true, ctime: new Date("2016-02-19"), title: "e-Commerce PayPal Integration: aquaful", 
	   content: "<p class='lead'>I needed a web presence for my retail store and none of the out-of-the-box solutions available appealed to me.  I ended up writing my own e-Commerce site in PHP.  Transactional database locking for inventory correctness and video-based shopping. </p><img class='img-responsive' src='/media/projects/software/aquaful.splash.jpg'><p>The aquaful site has some nifty features that I custom developed that I have yet to see in any other store.  I always felt that buying livestock online was never a sure bet.  Pictures would always look different from what I purchased and furthermore, the images weren't dated so it's unclear how long the livestock has been under possession.  I tried to solve this by tracking all this information in the e-Commerce platform that I built and in addition to photos, I built an interface so that a live video stream could have overlays with specimen information.  For example, I had a camera pointed at my coral tanks and in software, I wrote something that allowed me to create boxes around the corals and tag them with pricing.  Customers can then learn more about the coral and add them to their cart!</p><p>Another problem with WYSIWYG inventory is that when someone buys something, it is no longer available.  My solution uses a transactional model with database locking to make sure that nobody can buy something that someone else has bought already."},
	  {type: "Software", published: true, ctime: new Date("2016-02-19"), title: "AngularJS + D3 + Node.JS + Express + StrongLoop, Loopback: aquaful", 
	   content: "<p class='lead'>Node.JS asset management system with business insights </p><img class='img-responsive' src='/media/projects/software/aquaful.analytics.png'><p>One of the biggest challenges in running an aquarium store is good asset management.  With livestock, especially saltwater fishes, they can be incredibly sensitive to environmental changes and this often leads to losses.  Furthermore, patterns may start to develop where one type of livestock seems to not do as well in one system as another.  I decided to build this asset management site to help record and discover insights into livestock care.</p><p>This is a cloud-based solution with the ability to scale to many different accounts and to aggregate data across accounts for smarter pricing.</p>Although targeted towards businesses, this platform can also be really useful for data-loving aquarists.</p><p>This site is my first exposure to StrongLoop Loopback and AngularJS.  I think StrongLoop Loopback has a good future for bootstrapping the backend to new Node.JS-based web services that are coming to market.</p>"},
	  {type: "CNC Routing", published: false, ctime: new Date("2016-02-19"), title: "Hello Kitty in Cast Acrylic", 
	   content: "<p class='lead'></p><img class='img-responsive' src='/media/projects/cncrouting/cnc.hellokitty.jpg'>"}
      ];

      function getProjectEntries() {
	  if ($scope.projectEntries.length == 0) {
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
	  } else {
	      var temp = [];
	      angular.forEach($scope.projectEntries, function(v, k) {
		  if (v.type == $scope.projectEntryType && (v.published || $location.search().debug)) {
		      temp.push(v);
		  }
	      }); 
	      $scope.projectEntries = temp;
	  }
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
