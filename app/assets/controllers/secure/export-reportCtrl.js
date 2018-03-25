angular.module('myApp').controller('export-reportCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'HospitalService',
  '$rootScope',
  'prefix_url', function($anchorScroll,$scope,$http,HospitalService, $rootScope,prefix_url){
	$anchorScroll();
	$rootScope.title = 'Export Reports';
	$scope.dashData = [];
	$scope.orderType = 'products[0]._id';
	$scope.limitOrder = '10';
	$scope.equipType = 'id';
	$scope.limitEquip = '10';
	$scope.donor = false;
	$scope.requester = false;
	$scope.admin = false;
	if(HospitalService.hospital){
		$scope.userData  = HospitalService.hospital;
		switch($scope.userData.type){
			case 'admin' : getAdmin();
						   break;
		}
	}else if(HospitalService.user){
		$scope.userData  = HospitalService.user;
		switch($scope.userData.type){
			case 'donor' : getDonor($scope.userData.type, $scope.userData.id);
						   break;
			case 'requester' : getRequester($scope.userData.type, $scope.userData.id);
						   break;
			case 'admin' : getAdmin();
						   break;
		}
	}

	$scope.getDate = function (objectId) {
		return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
	};

	$scope.getAmount = function(data, filter){
		var final_amount = 0;
		if(data.length){
			data.forEach(function(key){
				if(key.status == filter)
					final_amount += key.total_amount;
				else if(filter == "")
					final_amount += key.total_amount;
			})
			return final_amount
		}else{
			return final_amount;
		}
	}

	$scope.getOrders = function(data, filter){
		var final_data = []
		data.forEach(function(key){
			if(key.status == filter){
				final_data.push(key);
			}
		})

		return final_data.length;
	}

	$scope.getHospitals = function(data, filter){
		var final_data = [];
		data.forEach(function(key){
			if(key.type == filter){
				final_data.push(key);
			} 
		})

		return final_data.length;
	}

	function getDonor(type, id){
		$scope.donor = true;
		$http.get(prefix_url + 'order/' + type + '/' + id).then(function(data){
			$scope.orders = data.data;
			
			$scope.dashData.unshift({
				color : "bg-yellow",
				label : "Net Amount",
				icon : "icofont icofont-money-bag",
				data : $scope.getAmount($scope.orders, 'approved'),
				total : 100000
			})

			$scope.dashData.unshift({
				color : "bg-red",
				label : "Pending Orders",
				icon : "icofont icofont-truck-loaded",
				data : $scope.getOrders($scope.orders, 'pending'),
				total : $scope.orders.length
			});

			$scope.dashData.unshift({
				color : "bg-green",
				label : "Approved Orders",
				icon : "icofont icofont-truck-loaded",
				data : $scope.getOrders($scope.orders, 'approved'),
				total : $scope.orders.length
			});
		}, function(err){
			console.log(err);
		})

		$http.get(prefix_url + 'equipments/' + id).then(function(data){
			$scope.equipments = data.data;
			$scope.dashData.unshift({
				color : "bg-aqua",
				label : "Donated Items",
				icon : "icofont icofont-first-aid-alt",
				data : $scope.equipments.length,
				total : $scope.equipments.length
			})
		}, function(err){
				console.log(err);
		})
	}

	function getRequester(type, id){
		$scope.requester = true;
		$http.get(prefix_url + 'order/' + type + '/' + id).then(function(data){
			$scope.orders = data.data;
			
			$scope.dashData.unshift({
				color : "bg-yellow",
				label : "Net Amount",
				icon : "icofont icofont-money-bag",
				data : $scope.getAmount($scope.orders, 'approved'),
				total : 100000
			})

			$scope.dashData.unshift({
				color : "bg-red",
				label : "Pending Orders",
				icon : "icofont icofont-truck-loaded",
				data : $scope.getOrders($scope.orders, 'pending'),
				total : $scope.orders.length
			})

			$scope.dashData.unshift({
				color : "bg-green",
				label : "Approved Orders",
				icon : "icofont icofont-truck-loaded",
				data : $scope.getOrders($scope.orders, 'approved'),
				total : $scope.orders.length
			})
		}, function(err){
			console.log(err);
		})
	}

	function getAdmin(){
		$scope.admin = true;
		$http.get(prefix_url + 'hospitals').then(function(data){
			$scope.hospitals = data.data;
			$scope.dashData.unshift({
				color : "bg-maroon",
				icon : "icofont icofont-hospital",
				label : "Donor Hospitals",
				data : $scope.getHospitals($scope.hospitals, 'donor'),
				total : $scope.getHospitals($scope.hospitals, 'donor')
			});
			$scope.dashData.unshift({
				color : "bg-purple",
				label : "Requester Hospitals",
				icon : "icofont icofont-hospital",
				data : $scope.getHospitals($scope.hospitals, 'requester'),
				total : $scope.getHospitals($scope.hospitals, 'requester')
			})
		}, function(err){

		})

		$http.get(prefix_url + 'orders').then(function(data){
			$scope.orders = data.data;
			
			$scope.dashData.unshift({
				color : "bg-yellow",
				label : "Net Amount",
				icon : "icofont icofont-money-bag",
				data : $scope.getAmount($scope.orders, 'approved'),
				total : 100000
			})

			$scope.dashData.unshift({
				color : "bg-red",
				label : "Pending Orders",
				icon : "icofont icofont-truck-loaded",
				data : $scope.getOrders($scope.orders, 'pending'),
				total : $scope.orders.length
			})

			$scope.dashData.unshift({
				color : "bg-green",
				label : "Approved Orders",
				icon : "icofont icofont-truck-loaded",
				data : $scope.getOrders($scope.orders, 'approved'),
				total : $scope.orders.length
			})
		}, function(err){
			console.log(err);
		})

		$http.get(prefix_url + 'equipments/' + $scope.userData.id).then(function(data){
			$scope.equipments = data.data;
			$scope.dashData.unshift({
				color : "bg-aqua",
				label : "Donated Items",
				icon : "icofont icofont-first-aid-alt",
				data : $scope.equipments.length,
				total : $scope.equipments.length
			})
		}, function(err){
				console.log(err);
		})
	}
}])