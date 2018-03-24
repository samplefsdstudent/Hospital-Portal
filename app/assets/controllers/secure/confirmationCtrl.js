angular.module('myApp').controller('confirmationCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'id',
  '$rootScope',
  'prefix_url', function($anchorScroll,$scope,$http,id,$rootScope,prefix_url){
	$anchorScroll();
	$rootScope.title = 'Order Confirmation';
	$http.get(prefix_url + 'order/' + id).then(function(data){
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