angular.module('myApp').controller('storeCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'HospitalService',
  'prefix_url', function($anchorScroll,$scope,$http,HospitalService,prefix_url){
	$anchorScroll();
	$scope.equipments = [];
	$scope.filter = 'diagnostic';
	$http.get(prefix_url + 'equipments').then(function(data){
		$scope.equipments = data.data;
		HospitalService.equipments = $scope.equipments;
	}, function(err){
		console.log(err);
	})
}])