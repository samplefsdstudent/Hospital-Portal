angular.module('myApp').controller('our_galleryCtrl', ['$routeParams', '$scope', function($routeParams,$scope){
	$scope.images = [{
		src : '../assets/images/gallery/01.jpg'
	},{
		src : '../assets/images/gallery/02.jpg'
	},{
		src : '../assets/images/gallery/03.jpg'
	},{
		src : '../assets/images/gallery/04.jpg'
	},{
		src : '../assets/images/gallery/05.jpg'
	},{
		src : '../assets/images/gallery/06.jpg'
	},{
		src : '../assets/images/gallery/07.jpg'
	},{
		src : '../assets/images/gallery/08.jpg'
	},{
		src : '../assets/images/gallery/09.jpg'
	}]
}])