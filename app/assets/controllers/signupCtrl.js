angular.module('myApp').controller('signupCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'toastr',
  'prefix_url', function($anchorScroll,$scope,$http,toastr,prefix_url){
	$anchorScroll();
	$scope.doSignup = function(data){
		if(angular.equals(data.password, data.confirm_password)){
			var params = {
				email : data.email,
				password : data.password,
				name : data.name,
				type : data.type,
				mobile_no : data.mobile_no,
				address : data.address,
				city : data.city,
				state : data.state,
				pin_code : data.pin_code,
				created_on : new Date(),
				status : false
			};
			$http.post(prefix_url + 'signup', params).then(function(data){
				toastr.success('Please login to your account.', 'Success');
			},function(error){
				toastr.error(error.data.message, 'Failed');
			});
		}else{
			toastr.warning('Provided passwords do not match', 'Warning');
		}
	}
		
}])