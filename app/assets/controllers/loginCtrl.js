angular.module('myApp').controller('loginCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'toastr',
  'HospitalService',
  '$state',
  '$window',
  '$rootScope',
  'prefix_url', function($anchorScroll,$scope,$http,toastr,HospitalService, $state, $window, $rootScope,prefix_url){
	$anchorScroll();
	$rootScope.title = 'Login';
	$scope.loginData = {};
	$scope.doLogin = function(data){
		var params = {
			email : data.email,
			password : data.password
		};
		$http.post(prefix_url + 'login', params).then(function(data){
			toastr.success('Logged In.', 'Success');
			HospitalService.user = data.data;
			$window.localStorage.setItem('access_token', HospitalService.user.access_token);
			delete HospitalService.user.access_token;
			$state.go('secure.dashboard',{user : data.data.type});
		},function(err){
			$anchorScroll();
			$scope.loginData = {};
			toastr.error(err.data.message, 'Login Failed!');
		})
	}
}])