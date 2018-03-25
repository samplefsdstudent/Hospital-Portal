angular.module('myApp').controller('sidebarCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'prefix_url',
  'user',
  'HospitalService',
  '$window',
  'toastr',
  '$state', function($anchorScroll,$scope,$http,prefix_url,user,HospitalService,$window,toastr,$state){
	$anchorScroll();
	if(angular.equals(user, 'requester')){
		$scope.access = [true,true,false,true,false,true,true,false,true,true];
	}else if(angular.equals(user, 'donor')){
		$scope.access = [true,true,false,false,true,true,false,false,true,true];
	}else if(angular.equals(user, 'admin')){
		$scope.access = [true,false,true,true,false,false,false,false,true,true];
	}
	$scope.userData  = HospitalService.user;
	$scope.userData.image = $scope.userData.image || '../../assets/images/user.png';
	$scope.logout = function(){
		$window.localStorage.clear();
		toastr.success('Logged Out.', 'Success');
		$state.go('app.home');
	}  

	$scope.getClass = function (state) {
	  return ($state.current.name.substr(0, state.length) === state) ? 'active' : '';
	}
}])
