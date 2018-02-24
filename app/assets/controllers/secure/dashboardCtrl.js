angular.module('myApp').controller('dashboardCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'prefix_url', function($anchorScroll,$scope,$http,prefix_url){
	$anchorScroll();
}])