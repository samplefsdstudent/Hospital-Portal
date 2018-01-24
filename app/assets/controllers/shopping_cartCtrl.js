angular.module('myApp').controller('shopping_cartCtrl', ['$routeParams','$scope','RestaurantService','prefix_url', function($routeParams,$scope,RestaurantService,prefix_url){
	$scope.order = {
		date : new Date(),
		total_amount : 0,
		products : RestaurantService.cart,
		address_details : {},
		contact_details : {},
		card_details : {}
	}
	$scope.filter = '1';

	$scope.next = function(flag){
		if(flag == 0){
			$scope.filter = '1';
		}
		if(flag == 1){
			$scope.filter = '2';
		}else if(flag == 2){
			$scope.filter = '3';
		}
	};

	$scope.$watch('order.products', function(oldValue, newValue){
		angular.forEach($scope.order.products, function(item){
			$scope.order.total_amount += item.price*item.number;
		})
	}, true)

	$scope.takeOrder = function(data){
		var name = data.contact_details.first_name + ' ' + data.contact_details.first_name;
		$http.post(prefix_url + 'order', data).then(function(data){
			alert('Hi ' + name + ' ,Order is successful!')
		}, function(err){
			alert('Error! Try after some time.')
		})
	}

	$scope.removeFromCart = function(data){
		for(var i=0;i < RestaurantService.cart.length;i++){
			if(angular.equals(RestaurantService.cart[i].name, data.name))
				RestaurantService.cart.splice(i,1);
				$scope.order.products.splice(i,1);
				break;
		}
		alert(`"${data.name}" is removed from your Cart!`);
	}
}])