angular.module('myApp').controller('our_menuCtrl', ['$routeParams','$scope','RestaurantService','$http','prefix_url', function($routeParams,$scope,RestaurantService,$http,prefix_url){
	$scope.filter = 'all';
	
	if(!RestaurantService.recipes.length){
		$http.get(prefix_url + 'menu').then(function(data){
			$scope.recipes = data.data;
			RestaurantService.recipes = data.data;
		}, function(err){
			console.log(err);
		})
	}else{
		$scope.recipes = RestaurantService.recipes
	}

	$scope.addToCart = function(data, index){
		if(!data.checked){
			RestaurantService.cart.push({
			name : data.name,
			image : data.image,
			rating : data.rating,
			number : data.number,
			price : data.price,
			description : data.description,
			type : data.type
			})
			alert(`"${data.name}" is added to your Cart!`);
			$scope.recipes[index].checked = true;
			return true;
		}else{
			RestaurantService.cart.splice(index,1);
			RestaurantService.recipes[index].checked = false;
			$scope.recipes = RestaurantService.recipes;
			alert(`"${data.name}" is removed from your Cart!`);
			return true;
		}
	}

	$scope.switch = function(value, data, index){
		var bool = $scope.addToCart(data,index)
		if(bool){
			return (value) ? $scope.recipes[index].checked = false : $scope.recipes[index].checked = true
		}
	}
}])