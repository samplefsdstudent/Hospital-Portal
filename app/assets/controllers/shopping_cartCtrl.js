angular.module('myApp').controller('shopping_cartCtrl', ['$routeParams','$scope','RestaurantService', function($routeParams,$scope,RestaurantService){
	$scope.items = RestaurantService.cart;
	console.log($scope.items);
	$scope.filter = '1';
	$scope.total_amount = 0;

	$scope.next = function(flag){
		if(flag == 0){
			$scope.filter = '1';

		}
		if(flag == 1){
			$scope.filter = '2';

		}else if(flag == 2){
			$scope.filter = '3';

		}else if(flag == 3){
			

		}
	};

	$scope.$watch('items', function(oldValue, newValue){
		angular.forEach($scope.items, function(item){
			$scope.total_amount += item.price*item.number;
		})
	}, true)
}])