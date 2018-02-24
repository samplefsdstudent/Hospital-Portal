angular.module('myApp').controller('loginCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'toastr',
  'HospitalService',
  '$state',
  'prefix_url', function($anchorScroll,$scope,$http,toastr,HospitalService, $state,prefix_url){
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
			HospitalService.user.id = HospitalService.user._id;
			delete HospitalService.user.password;
			delete HospitalService.user._id;
			delete HospitalService.user.__v;
			console.log('USER', HospitalService.user);
			$state.go('secure.dashboard',{user : data.data.type});
		},function(err){
			console.log(err);
			toastr.error(err.data.message, 'Error');
		})
	}
}])