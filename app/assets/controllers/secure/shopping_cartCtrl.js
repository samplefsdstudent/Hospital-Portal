angular.module('myApp').controller('shopping_cartCtrl', [
	'$anchorScroll',
	'$scope',
	'HospitalService',
	'$http',
	'prefix_url',
	'$anchorScroll',
	'$state',
	'toastr',
	'$rootScope', function($anchorScroll,$scope,HospitalService,$http,prefix_url,$anchorScroll,$state,toastr,$rootScope){
	  $anchorScroll();
	  $rootScope.title = 'Shopping Cart';
	  $scope.sourceImage = null;
	  $scope.userData = HospitalService.user;
	  	$scope.order = {
		date : new Date(),
		total_amount : 0,
		products : HospitalService.cart,
		address_details : {
			address : $scope.userData.address,
			city : $scope.userData.city,
			state : $scope.userData.state,
			pin_code : $scope.userData.pin_code
		},
		contact_details : {
			first_name : $scope.userData.name.split(" ")[0],
			last_name : $scope.userData.name.split(" ")[1],
			email : $scope.userData.email,
			mobile_no : $scope.userData.mobile_no
		},
		receipt_details : {
			payment_mode : 'Credit Card'
		},
		deal_with : new String($scope.userData.id)
	  	}
	  	if(HospitalService.cart.length > 0){
	  	  $scope.order.donated_by = new String(HospitalService.cart[0].donated_by);
	  	}
	  $scope.filter = '1';

	  $scope.next = function(flag){
		if(flag == 0){
			$scope.filter = '1';
			$anchorScroll();
		}else if(flag == 1){
			$scope.filter = '2';
			$anchorScroll();
		}else if(flag == 2){
			$scope.filter = '3';
			$anchorScroll();
		}
	  };

	  $scope.$watch('order.products', function(oldValue, newValue){
		var total_amount = 0;
		angular.forEach($scope.order.products, function(item){
			total_amount += item.price*item.quantity;
			$scope.order.total_amount = total_amount;
		})
	  }, true)

	  $scope.takeOrder = function(data){
		var name = data.contact_details.first_name + ' ' + data.contact_details.last_name;
		$http.post(prefix_url + 'order', data).then(function(data){
			HospitalService.cart = [];
			HospitalService.equipments = [];
			$state.go('secure.confirmation', {id : data.data.ref_id.toLowerCase()}); 
		}, function(err){
			toastr.error('Error! Try after some time.', 'Error');
		})
	  }

	  $scope.removeFromCart = function(index){
		index = HospitalService.cart.length - index - 1;
		var name = HospitalService.cart[index].name;
		HospitalService.cart.splice(index,1);
		HospitalService.equipments[index].status = false;
		$scope.order.products = HospitalService.cart;
		$scope.$apply();
		$rootScope.$emit('badgeUpdate', HospitalService.cart.length);
		toastr.warning(`"${name}" is removed from your Cart!`, 'Removed');
	  }

	  $scope.navigator = function(flag){
		if(flag == 0)
			$state.go('secure.store');
	  }
}])