angular.module('myApp').controller('sidebarCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'prefix_url',
  'user',
  '$stateParams',
  '$state', function($anchorScroll,$scope,$http,prefix_url,user,$stateParams,$state){
	$anchorScroll();
	if(angular.equals(user, 'requester')){
		$scope.access = [true,true,false,true,false,true,true,false,true,true,true,true];
	}else if(angular.equals(user, 'donor')){
		$scope.access = [true,true,false,false,true,true,true,false,true,true,true,true];
	}else if(angular.equals(user, 'admin')){
		$scope.access = [true,false,true,true,true,false,true,true,true,true,true,true];
	}
	$scope.userData  = $stateParams.user_data;

	$scope.logout = function(){
		
	}  
}])