angular.module('myApp').controller('hospitalCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  '$state',
  'HospitalService',
  'prefix_url', function($anchorScroll,$scope,$http,$state,HospitalService,prefix_url){
	$anchorScroll();
	$scope.filter = "donor";
	HospitalService.hospital = undefined;
	$http.get(prefix_url + 'hospitals').then(function(data){
		$scope.hospitals = data.data;
	}, function(err){

	})

	$scope.viewHospital =  function(data){
		HospitalService.hospital = data;
		$state.go('secure.profile');
	}
}])