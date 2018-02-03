angular.module('myApp').controller('homeCtrl', ['$routeParams','$scope','RestaurantService','$http','prefix_url','$anchorScroll','$location', function($routeParams, $scope, RestaurantService, $http,prefix_url,$anchorScroll,$location){

	$scope.filter = 'all';
	$scope.reserveData = {};
	$scope.person_count = 0;

	$http.get(prefix_url + 'menu').then(function(data){
		$scope.recipes = data.data;
	}, function(err){
		console.log(err);
	})

	$scope.recipes = RestaurantService.recipes;

	$scope.doReservation = function(data){
		data.person_count = person_count;
		var name = data.name;
		$http.post(prefix_url + 'reservation', data).then(function(data){
			alert('Hi ' + name + ' ,Booking is done! Please check your email for details.')
			$anchorScroll();
			$scope.reserveData = {}
			$scope.person_count = 0;
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

	$scope.carouselInit = function() {
		/*dish script code start here*/
		$('.dish').owlCarousel({
			items: 5,
			itemsDesktop : [1199, 3],
			itemsDesktopSmall : [979, 3],
			itemsTablet : [768, 1],
			itemsMobile : [479, 1],
			navigation : false,
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem : false,
			navigationText: ['<i class="fa fa-angle-double-left fa1"></i>', '<i class="fa fa-angle-double-right fa2"></i>'],
			pagination: false,
		});
		/*dish script code end here*/
	};

	$scope.navigator = function(flag){
		if(flag == 0)
			$location.path('/our-menu'); 
	}
}])