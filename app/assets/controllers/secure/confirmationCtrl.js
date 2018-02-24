angular.module('myApp').controller('confirmationCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'prefix_url', function($anchorScroll,$scope,$http,prefix_url){
	$anchorScroll();
}])