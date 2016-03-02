angular
  .module('app')
  .controller('PortfolioController', ['$scope', '$state', function($scope, $state) {
      $scope.portfolioItems = [
	  { path: "/media/portfolio/DSC00179.jpg", caption: "A Bird on a Stroll" },
	  { path: "/media/portfolio/DSC00536.jpg", caption: "Basking" },
	  { path: "/media/portfolio/DSC00649.jpg", caption: "Bored" },
	  { path: "/media/portfolio/DSC02587.jpg", caption: "Sharp" },
	  { path: "/media/portfolio/DSC07493.jpg", caption: "Hey!" },
	  { path: "/media/portfolio/DSC08118.jpg", caption: "Soaring" },
	  { path: "/media/portfolio/DSC09784.jpg", caption: "Pounce" },
	  { path: "/media/portfolio/DSC09795.jpg", caption: "I see you" },
	  { path: "/media/portfolio/DSC09874.jpg", caption: "Posing" },
	  { path: "/media/portfolio/lac1.jpg", caption: "Lac Operon" },
	  { path: "/media/portfolio/phospholipid-bilayer2.jpg", caption: "Phospholipid Bilayer" },
	  { path: "/media/portfolio/phospholipid-bilayer3.jpg", caption: "Cotransport System" },
	  { path: "/media/portfolio/phospholipid-bilayer4.jpg", caption: "Sodium Potassium Pump" },
	  { path: "/media/portfolio/selfie.jpg", caption: "Selfie" },
	  { path: "/media/portfolio/DSC08187.jpg", caption: "Water" },
	  { path: "/media/portfolio/DSC03244.jpg", caption: "Magic" },
	  { path: "/media/portfolio/DSC09216.jpg", caption: "Messy Panda" },
	  { path: "/media/portfolio/12244498_1222434011106704_621861434513493591_o.jpg", caption: "Hanging Around" },
	  { path: "/media/portfolio/1782420_855852424431533_5048512154274925111_o.jpg", caption: "Grazing" },
	  { path: "/media/portfolio/935822_677701325579978_2032799959_n.jpg", caption: "Undercover Clown" },
	  { path: "/media/portfolio/11888557_1183882768295162_7101306432847059250_o.jpg", caption: "Zoanthids" },
	  { path: "/media/portfolio/12017576_1195989463751159_4516253382488762098_o.jpg", caption: "Zoanthids" },
	  { path: "/media/RainbowLobo.jpg", caption: "Rainbow Lobophyllia" }
      ];
      
  }]);
