angular.module('myApp').controller('testimonialCtrl', ['$routeParams','$scope','$http', 'prefix_url', function($routeParams,$scope, $http, prefix_url){
	$http.get(prefix_url + 'testimonials').then(function(data){
		$scope.testimonials = data.data;
	}, function(err){
		console.log(err);
	})
}])