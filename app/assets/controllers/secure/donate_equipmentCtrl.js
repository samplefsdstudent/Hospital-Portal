angular.module('myApp').controller('donate_equipmentCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'HospitalService',
  'toastr',
  '$state',
  'prefix_url', function($anchorScroll,$scope,$http,HospitalService,toastr,$state,prefix_url){
	$anchorScroll();
	$scope.userData = HospitalService.user;
	console.log($scope.userData);
	$scope.donateData = {
		address : $scope.userData.address,
		city : $scope.userData.city,
		state : $scope.userData.state,
		pin_code : $scope.userData.pin_code

	}

	$scope.sourceImage = null;
	$scope.donateEquipment = function(donateData){
		console.log(donateData);
		var data = {
			type : donateData.type,
			name : donateData.name,
			image : donateData.image,
			price : donateData.price,
			quantity : donateData.quantity,
			address : donateData.address,
			city : donateData.city,
			state : donateData.state,
			pin_code : donateData.pin_code,
			description : donateData.description,
			status : 'available',
			donated_by : {
				id : $scope.userData.id,
				name : $scope.userData.name
			},
			sold_to : {}
		}

		$http.post(prefix_url + 'equipment', data , function(data){
			toastr.success('Track the Order of your Equipment.', 'Success');
			$state.go('secure.orders');
		}, function(err){

		})
	}
}])