angular.module('myApp').controller('searchCtrl', ['$routeParams','$scope', function($routeParams,$scope){
	$scope.filter = '';
	$scope.products = [{
		image : "../assets/images/shop/01.jpg",
		name : "Shop 1",
		avg_price : "20.00",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non eleifend erat, vitae aliquam metus. Donec orci tellus, rhoncus eget ipsum tempus, dignissim rutrum enim. Integer interdum sapien nec tempus luctus."
	},{
		image : "../assets/images/shop/02.jpg",
		name : "Shop 2",
		avg_price : "20.00",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non eleifend erat, vitae aliquam metus. Donec orci tellus, rhoncus eget ipsum tempus, dignissim rutrum enim. Integer interdum sapien nec tempus luctus."
	},{
		image : "../assets/images/shop/03.jpg",
		name : "Shop 3",
		avg_price : "20.00",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non eleifend erat, vitae aliquam metus. Donec orci tellus, rhoncus eget ipsum tempus, dignissim rutrum enim. Integer interdum sapien nec tempus luctus."
	},{
		image : "../assets/images/shop/04.jpg",
		name : "Shop 4",
		avg_price : "20.00",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non eleifend erat, vitae aliquam metus. Donec orci tellus, rhoncus eget ipsum tempus, dignissim rutrum enim. Integer interdum sapien nec tempus luctus."
	},{
		image : "../assets/images/shop/05.jpg",
		name : "Shop 5",
		avg_price : "20.00",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non eleifend erat, vitae aliquam metus. Donec orci tellus, rhoncus eget ipsum tempus, dignissim rutrum enim. Integer interdum sapien nec tempus luctus."
	},{
		image : "../assets/images/shop/06.jpg",
		name : "Shop 6",
		avg_price : "20.00",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non eleifend erat, vitae aliquam metus. Donec orci tellus, rhoncus eget ipsum tempus, dignissim rutrum enim. Integer interdum sapien nec tempus luctus."
	},{
		image : "../assets/images/shop/03.jpg",
		name : "Shop 7",
		avg_price : "20.00",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non eleifend erat, vitae aliquam metus. Donec orci tellus, rhoncus eget ipsum tempus, dignissim rutrum enim. Integer interdum sapien nec tempus luctus."
	},{
		image : "../assets/images/shop/07.jpg",
		name : "Shop 8",
		avg_price : "20.00",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non eleifend erat, vitae aliquam metus. Donec orci tellus, rhoncus eget ipsum tempus, dignissim rutrum enim. Integer interdum sapien nec tempus luctus."
	},{
		image : "../assets/images/shop/08.jpg",
		name : "Shop 9",
		avg_price : "20.00",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non eleifend erat, vitae aliquam metus. Donec orci tellus, rhoncus eget ipsum tempus, dignissim rutrum enim. Integer interdum sapien nec tempus luctus."
	},{
		image : "../assets/images/shop/09.jpg",
		name : "Shop 10",
		avg_price : "20.00",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non eleifend erat, vitae aliquam metus. Donec orci tellus, rhoncus eget ipsum tempus, dignissim rutrum enim. Integer interdum sapien nec tempus luctus."
	},{
		image : "../assets/images/shop/04.jpg",
		name : "Shop 11",
		avg_price : "20.00",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non eleifend erat, vitae aliquam metus. Donec orci tellus, rhoncus eget ipsum tempus, dignissim rutrum enim. Integer interdum sapien nec tempus luctus."
	}]
}])