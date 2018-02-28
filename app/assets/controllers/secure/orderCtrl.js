angular.module('myApp').controller('orderCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'HospitalService',
  'prefix_url', function($anchorScroll,$scope,$http,HospitalService,prefix_url){
	$anchorScroll();
	var params = {
		type : HospitalService.user.type,
		id : new String(HospitalService.user.id)
	}
	$http.get(prefix_url + 'order/' + params.type + '/' + params.id).then(function(data){
		$scope.orders = data.data;
	}, function(err){
		console.log(err);
	})
}])