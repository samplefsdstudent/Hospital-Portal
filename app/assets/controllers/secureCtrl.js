angular.module('myApp').controller('secureCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'user',
  'HospitalService',
  '$stateParams',
  'prefix_url', function($anchorScroll,$scope,$http,user,HospitalService,$stateParams,prefix_url){
	$anchorScroll();
}])