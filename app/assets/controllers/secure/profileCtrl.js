angular.module('myApp').controller('profileCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'HospitalService',
  'prefix_url', function($anchorScroll,$scope,$http,HospitalService,prefix_url){
	$anchorScroll();

	$scope.userData  = HospitalService.user;
	$scope.userData.image = $scope.userData.image || '../assets/images/user.png';
}])