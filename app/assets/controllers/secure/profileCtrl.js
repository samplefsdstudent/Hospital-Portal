angular.module('myApp').controller('profileCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'HospitalService',
  'prefix_url', function($anchorScroll,$scope,$http,HospitalService,prefix_url){
	$anchorScroll();
	$scope.filter = 'pending';
	$scope.results = [];
	$scope.dates = [];
	var params = {
		type : HospitalService.user.type,
		id : new String(HospitalService.user.id)
	}
	$http.get(prefix_url + 'order/' + params.type + '/' + params.id).then(function(response){
		var results = {};
		let data = response.data;
		console.log('data', data);
		data.forEach(function(key){
			console.log('key', key);
			if(!results[key.date]){
				results[key.date] = [];
			}
			let color = '#' + Math.floor(Math.random()*16777215).toString(16);
			results[key.date].push({
				ref_id : key.ref_id,
				total_amount : key.total_amount,
				status : key.status,
				description : key.description,
				color : color,
				date : key.date,
				id : key.products[0]._id
			});
		});

		Object.keys(results).forEach(function(key, value){
			console.log(value, key, results, results[key]);
			$scope.dates.push(key);
			let data = results[key];
			console.log(data);
			$scope.results = $scope.results.concat(data);
		});
		console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< results', $scope.results);
	}, function(err){
		console.log(err);
	})
	if(!HospitalService.hospital){
		$scope.userData  = HospitalService.user;
		$scope.userData.image = $scope.userData.image || '../assets/images/user.png';
	}else{
		$scope.status = true;
		$scope.userData  = HospitalService.hospital;
		$scope.userData.image = $scope.userData.image || '../assets/images/user.png';
	}
}])