angular.module('myApp').controller('loginCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'toastr',
  'HospitalService',
  '$state',
  '$window',
  'prefix_url', function($anchorScroll,$scope,$http,toastr,HospitalService, $state, $window, prefix_url){
	$anchorScroll();
	$scope.doLogin = function(data){
		var params = {
			email : data.email,
			password : data.password
		};
		$http.post(prefix_url + 'login', params).then(function(data){
			toastr.success('Logged In.', 'Success');
			console.log(data);
			HospitalService.user = data.data;
			console.log('USER', HospitalService.user);
			$window.localStorage.setItem('access_token', HospitalService.user.access_token);
			delete HospitalService.user.access_token;
			$state.go('secure.dashboard',{user : data.data.type});
		},function(err){
			console.log(err);
			toastr.error(err.data.message, 'Error');
		})
	}
}])