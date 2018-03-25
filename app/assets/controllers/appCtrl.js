angular.module('myApp').controller('appCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  '$state',
  'prefix_url', function($anchorScroll,$scope,$http,$state,prefix_url){
	$anchorScroll();
	$scope.getClass = function (state) {
	  return ($state.current.name.substr(0, state.length) === state) ? 'active' : '';
	}
}])