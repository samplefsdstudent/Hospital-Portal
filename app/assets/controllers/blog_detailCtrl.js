angular.module('myApp').controller('blog_detailCtrl', ['$routeParams','$scope','$http', 'prefix_url', function($routeParams,$scope,$http,prefix_url){
	$scope.index = $routeParams.id - 1;
	$http.get(prefix_url + 'blogs').then(function(data){
		$scope.blogs = data.data;
	}, function(err){
		console.log(err);
	})
}])