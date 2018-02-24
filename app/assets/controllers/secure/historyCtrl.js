angular.module('myApp').controller('historyCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'prefix_url', function($anchorScroll,$scope,$http,prefix_url){
	$anchorScroll();
}])