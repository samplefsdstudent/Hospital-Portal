angular.module('myApp').controller('testimonialCtrl', ['$routeParams','$scope', function($routeParams,$scope){
	$scope.testimonials = [{
		name : "John Doe",
		image : "../assets/images/testimonials/01.jpg",
		content : " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin. Duis eu tristique elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin.",
		rating : 4
	},{
		name : "Johnson Dwin",
		image : "../assets/images/testimonials/02.jpg",
		content : " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin. Duis eu tristique elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin.",
		rating : 5
	},{
		name : "Wil Keit",
		image : "../assets/images/testimonials/03.jpg",
		content : " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin. Duis eu tristique elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin.",
		rating : 4
	},{
		name : "Brad Hardley",
		image : "../assets/images/testimonials/04.jpg",
		content : " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin. Duis eu tristique elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin.",
		rating : 5
	},{
		name : "Richard Willson",
		image : "../assets/images/testimonials/05.jpg",
		content : " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin. Duis eu tristique elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin.",
		rating : 3
	},]

}])