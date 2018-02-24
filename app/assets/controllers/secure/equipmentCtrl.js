angular.module('myApp').controller('equipmentCtrl', [
	'$anchorScroll',
	'$scope',
	'HospitalService',
	'$http',
	'prefix_url',
	'$rootScope', function($anchorScroll,$scope,HospitalService,$http,prefix_url,$rootScope){
	$anchorScroll();
	$scope.filter = 'all';
	if(!HospitalService.equipments.length){
		$http.get(prefix_url + 'menu').then(function(data){
			$scope.equipments = data.data;
			HospitalService.equipments = data.data;
		}, function(err){
			console.log(err);
		})
	}else{
		$scope.equipments = HospitalService.equipments
	}

	$scope.addToCart = function(data, index){
		if(!data.checked){
			HospitalService.cart.push({
			name : data.name,
			image : data.image,
			rating : data.rating,
			number : data.number,
			price : data.price,
			description : data.description,
			type : data.type
			});
			$rootScope.$emit('badgeUpdate', HospitalService.cart.length);
			alert(`"${data.name}" is added to your Cart!`);
			$scope.equipments[index].checked = true;
			return true;
		}else{
			HospitalService.cart.splice(index,1);
			HospitalService.equipments[index].checked = false;
			$scope.equipments = HospitalService.equipments;
			$rootScope.$emit('badgeUpdate', HospitalService.cart.length);
			alert(`"${data.name}" is removed from your Cart!`);
			return true;
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

	$scope.switch = function(value, data, index){
		var bool = $scope.addToCart(data,index)
		if(bool){
			return (value) ? $scope.equipments[index].checked = false : $scope.equipments[index].checked = true
		}
	}
}])