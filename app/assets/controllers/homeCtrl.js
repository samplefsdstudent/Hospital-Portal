angular.module('myApp').controller('homeCtrl', [
 '$scope',
 'HospitalService',
 '$http',
 'prefix_url',
 '$anchorScroll',
 '$location',
 '$rootScope', function($scope, HospitalService, $http,prefix_url,$anchorScroll,$location,$rootScope){
   $anchorScroll();
   $scope.filter = 'all';
   $scope.reserveData = {
	 person_count : 1
   };
   
	$scope.services = [{
		name : "Items Availability",
		image : "../assets/images/about/icon1.png",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id."
	},{
		name : "Only Transport Cost Paid",
		image : "../assets/images/about/icon2.png",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id."
	},{
		name : "Order in Bulk",
		image : "../assets/images/about/icon3.png",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id."
	},{
		name : "Special Offers",
		image : "../assets/images/about/icon4.png",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id."
	},{
		name : "Any Payment Mode",
		image : "../assets/images/about/icon5.png",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id."
	},{
		name : "Hospitals Availability",
		image : "../assets/images/about/icon6.png",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id."
	}];

	$scope.doReservation = function(data){
	 var name = data.name;
	 $http.post(prefix_url + 'reservation', data).then(function(data){
		$location.path('/' + data.data.ref_id + '/confirmation/reservation'); 
		$scope.reserveData = {}
		$scope.person_count = 0;
	 }, function(err){
	    alert('Error! Try after some time.')
	 })
	}

	$scope.addToCart = function(data, index){
		if(!data.checked){
			HospitalService.cart.push({
			name : data.name,
			image : data.image,
			number : data.number,
			price : data.price,
			rating : data.rating,
			description : data.description,
			type : data.type
			})
			$rootScope.$emit('badgeUpdate', HospitalService.cart.length);
			alert(`"${data.name}" is added to your Cart!`);
			$scope.equipments[index].checked = true;
			return false;
		}else{
			HospitalService.cart.splice(index,1);
			HospitalService.equipments[index].checked = false;
			$scope.equipments = HospitalService.equipments;
			$scope.$emit('badgeUpdate', HospitalService.cart.length);
			alert(`"${data.name}" is removed from your Cart!`);
			return true;
		}
	}

	$scope.switch = function(value, data, index){
		var bool = $scope.addToCart(data,index)
		if(bool){
			return (value) ? $scope.equipments[index].checked = false : $scope.equipments[index].checked = true
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
		else if(flag == 1)
			 $location.path('/reservation');
	}
}])