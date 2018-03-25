angular.module('myApp').controller('hospitalCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  '$state',
  'HospitalService',
  '$rootScope',
  'prefix_url', function($anchorScroll,$scope,$http,$state,HospitalService,$rootScope,prefix_url){
	$anchorScroll();
	$rootScope.title = 'Hospitals';
	$scope.filter = {type : 'donor', status : 'approved'};
	HospitalService.hospital = undefined;
	$http.get(prefix_url + 'hospitals').then(function(data){
		$scope.hospitals = data.data;
	}, function(err){

	})

	$scope.viewHospital =  function(data){
		HospitalService.hospital = data;
		HospitalService.hospital.id = HospitalService.hospital._id;
		delete HospitalService.hospital._id;
		$state.go('secure.profile');
	}
}])