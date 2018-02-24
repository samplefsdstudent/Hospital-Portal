angular.module('myApp').controller('hospitalCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'prefix_url', function($anchorScroll,$scope,$http,prefix_url){
	$anchorScroll();
}])