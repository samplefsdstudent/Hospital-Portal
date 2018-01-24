angular.module('myApp').controller('homeCtrl', ['$routeParams','$scope','RestaurantService','$http','prefix_url','$anchorScroll', function($routeParams, $scope, RestaurantService, $http,prefix_url,$anchorScroll){

	$scope.filter = 'all';
	$scope.reserveData = {
		person_count : 0
	};
	console.log(prefix_url);
	$scope.recipes = RestaurantService.recipes;

	$scope.doReservation = function(data){
		var name = data.name;
		$http.post(prefix_url + 'reservation', data).then(function(data){
			alert('Hi ' + name + ' ,Booking is done! Please check your email for details.')
			$anchorScroll();
			$scope.reserveData = {
				person_count : 0
			}
		}, function(err){
			alert('Error! Try after some time.')
		})
	}

	$scope.addToCart = function(data, index){
		if(!data.checked){
			RestaurantService.cart.push({
			name : data.name,
			image : data.image,
			number : data.number,
			price : data.price,
			rating : data.rating,
			description : data.description,
			type : data.type
			})
			alert(`"${data.name}" is added to your Cart!`);
			$scope.recipes[index].checked = true;
			console.log(RestaurantService.cart);
			return false;
		}else{
			for(var i=0;i < RestaurantService.cart.length;i++){
				if(angular.equals(RestaurantService.cart[i].name, data.name)){
					RestaurantService.cart.splice(i,1);
					break;
				}
			}
			alert(`"${data.name}" is removed from your Cart!`);
			console.log(RestaurantService.cart);
			RestaurantService.recipes[index].checked = false;
			$scope.recipes = RestaurantService.recipes;
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