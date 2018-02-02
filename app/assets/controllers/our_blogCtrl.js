angular.module('myApp').controller('our_blogCtrl', ['$routeParams','$scope','$location','$http', 'prefix_url', function($routeParams,$scope,$location,$http, prefix_url){
	$http.get(prefix_url + 'blogs').then(function(data){
		$scope.blogs = data.data;
	}, function(err){
		console.log(err);
	})

	$scope.navigator = function(id){
		$location.path('/blog-details/' + id); 
	}
}])