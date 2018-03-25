angular.module('myApp').controller('profileCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'HospitalService',
  'toastr',
  '$rootScope',
  'prefix_url', function($anchorScroll,$scope,$http,HospitalService,toastr,$rootScope,prefix_url){
	$anchorScroll();
	$rootScope.title = 'Profile';
	$scope.filter = 'pending';
	$scope.results = [];
	$scope.dates = [];
	$scope.pwdData =  {};
	$scope.statData = {};
	var params = {};
	var colorList = {
		approved : "#00a65a",
		pending : "#f39c12",
		rejected : "#dd4b39"
	}
	if(HospitalService.hospital){
		var params = {
		type : HospitalService.hospital.type,
		id : new String(HospitalService.hospital.id)
	}
	}else if(HospitalService.user){
		var params = {
		type : HospitalService.user.type,
		id : new String(HospitalService.user.id)
	}
	}
	$http.get(prefix_url + 'order/' + params.type + '/' + params.id).then(function(response){
		var results = {};
		var data = response.data;
		if(data.length){
			data.forEach(function(key){
				if(!results[key.date]){
					results[key.date] = [];
				}
				//var color = '#' + Math.floor(Math.random()*16777215).toString(16);
				results[key.date].push({
					ref_id : key.ref_id,
					total_amount : key.total_amount,
					status : key.status,
					description : key.products[0].description,
					color : colorList[key.status],
					date : key.date,
					id : key._id.toUpperCase()
				});
			});
			Object.keys(results).forEach(function(key, value){
				$scope.dates.push(key);
				var data = results[key];
				$scope.results = $scope.results.concat(data);
			});
		}
	}, function(err){
		console.log(err);
	})

	if(!HospitalService.hospital){
		$scope.userData  = HospitalService.user;
		$scope.userData.image = $scope.userData.image || '../assets/images/user.png';
		$scope.userData.created_on = new Date($scope.userData.created_on);
	}else{
		$scope.status = true;
		$scope.userData.created_on = new Date(HospitalService.hospital.created_on);
		$scope.userData  = HospitalService.hospital;
		$scope.userData.image = $scope.userData.image || '../assets/images/user.png';
		$scope.userData.created_on = new Date($scope.userData.created_on);
		if(angular.equals($scope.userData.type), "donor")
			$scope.label = "Donated";
		else if(angular.equals($scope.userData.type), "requester")
			$scope.label = "Requested";
	}

	$scope.editProfile = function(data){
		$http.post(prefix_url + 'hospitals', data).then(function(data){
			toastr.success(data.data.message, 'Success');
		}, function(err){
			toastr.error(err, 'Error');
		})
	}

	$scope.changePwd = function(data){
		data.email = $scope.userData.email;
		if(angular.equals(data.new_password, data.confirm_password)){
			if(data.checked){
				$http.post(prefix_url + 'password/change', data).then(function(data){
					toastr.success(data.data.message, 'Success');
					$scope.pwdData = {};
					$anchorScroll();
				}, function(err){
					toastr.error(err.data.message, 'Error');
				})
			}else{
				toastr.error('Please accept terms and conditions to proceed.', 'Warning');
			}
		}else{
			toastr.error('Password do not match.', 'Error');
		}
	}

	$scope.changeStatus = function(data){
		data.email = $scope.userData.email;
		if(data.checked){
			data.status = (angular.equals($scope.userData.status, "disabled")) ? "approved" : "disabled";
			$http.post(prefix_url + 'account/status', data).then(function(data){
				toastr.success(data.data.message, 'Success');
				$scope.userData.status = data.data.data.status;
				$scope.statData = {};
				$anchorScroll();
			}, function(err){
				toastr.error(err.data.message, 'Error');
			})
		}else{
			toastr.error('Please accept terms and conditions to proceed.', 'Warning');
		}
	}
}])