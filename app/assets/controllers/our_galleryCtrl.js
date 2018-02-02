angular.module('myApp').controller('our_galleryCtrl', ['$routeParams', '$scope','$http','prefix_url', function($routeParams,$scope,$http, prefix_url){
	$http.get(prefix_url + 'gallery').then(function(data){
		$scope.images = data.data;
	}, function(err){
		console.log(err);
	})
}])