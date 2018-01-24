angular.module('myApp').controller('shopCtrl', ['$routeParams','$scope', function($routeParams,$scope){
	$scope.view = {
		grid : true,
		list : false
	}

	$scope.class = 'col-lg-4 col-md-4 col-sm-6 col-xs-12';

	$scope.change = function(flag){
		if(flag == 1){
			$scope.view = {
				list : true,
				grid : false
			}
			$scope.class = 'col-xs-12';
		}else if(flag == 2){
			$scope.view = {
				list : false,
				grid : true
			}
			$scope.class = 'col-lg-4 col-md-4 col-sm-6 col-xs-12';
		}
	};

	$scope.shops = [{
		image : "../assets/images/shop/01.jpg",
		name : "Product 1",
		rating : 4,
		price : 20.00,
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non eleifend erat, vitae aliquam metus. Donec orci tellus, rhoncus eget ipsum tempus, dignissim rutrum enim. Integer interdum sapien nec tempus luctus."
	},{
		image : "../assets/images/shop/02.jpg",
		name : "Product 2",
		rating : 3,
		price : 20.00,
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non eleifend erat, vitae aliquam metus. Donec orci tellus, rhoncus eget ipsum tempus, dignissim rutrum enim. Integer interdum sapien nec tempus luctus."
	},{
		image : "../assets/images/shop/03.jpg",
		name : "Product 3",
		rating : 1,
		price : 20.00,
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non eleifend erat, vitae aliquam metus. Donec orci tellus, rhoncus eget ipsum tempus, dignissim rutrum enim. Integer interdum sapien nec tempus luctus."
	},{
		image : "../assets/images/shop/04.jpg",
		name : "Product 4",
		rating : 4,
		price : 20.00,
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non eleifend erat, vitae aliquam metus. Donec orci tellus, rhoncus eget ipsum tempus, dignissim rutrum enim. Integer interdum sapien nec tempus luctus."
	},{
		image : "../assets/images/shop/05.jpg",
		name : "Product 5",
		rating : 2,
		price : 20.00,
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non eleifend erat, vitae aliquam metus. Donec orci tellus, rhoncus eget ipsum tempus, dignissim rutrum enim. Integer interdum sapien nec tempus luctus."
	},{
		image : "../assets/images/shop/06.jpg",
		name : "Product 6",
		rating : 3,
		price : 20.00,
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non eleifend erat, vitae aliquam metus. Donec orci tellus, rhoncus eget ipsum tempus, dignissim rutrum enim. Integer interdum sapien nec tempus luctus."
	},{
		image : "../assets/images/shop/07.jpg",
		name : "Product 7",
		rating : 1,
		price : 20.00,
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non eleifend erat, vitae aliquam metus. Donec orci tellus, rhoncus eget ipsum tempus, dignissim rutrum enim. Integer interdum sapien nec tempus luctus."
	},{
		image : "../assets/images/shop/08.jpg",
		name : "Product 8",
		rating : 4,
		price : 20.00,
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non eleifend erat, vitae aliquam metus. Donec orci tellus, rhoncus eget ipsum tempus, dignissim rutrum enim. Integer interdum sapien nec tempus luctus."
	},{
		image : "../assets/images/shop/09.jpg",
		name : "Product 9",
		rating : 4,
		price : 20.00,
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non eleifend erat, vitae aliquam metus. Donec orci tellus, rhoncus eget ipsum tempus, dignissim rutrum enim. Integer interdum sapien nec tempus luctus."
	}]
}])