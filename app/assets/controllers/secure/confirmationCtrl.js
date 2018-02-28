angular.module('myApp').controller('confirmationCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'id',
  'prefix_url', function($anchorScroll,$scope,$http,id,prefix_url){
	$anchorScroll();
	$http.get(prefix_url + 'order/',{id : id})
		.then(function(data){
		$scope.orderData = data.data[0];
	}, function(err){
		console.log(err);
	})
		
	$scope.navigation = function(flag){
		if(flag == 0){
		$state.go('secure.dashboard');
		}
	}
}])