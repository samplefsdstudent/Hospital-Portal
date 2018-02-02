angular.module('myApp').controller('blog_detailCtrl', ['$routeParams','$scope','$http', 'prefix_url', function($routeParams,$scope,$http,prefix_url){
	$scope.index = $routeParams.id - 1;
	$http.get(prefix_url + 'blogs').then(function(data){
		$scope.blogs = data.data;
		$http.get(prefix_url + 'comments/' + $scope.blogs[$scope.index].id).then(function(data){
			$scope.comments = data.data;
		}, function(err){
			console.log(err);
		})
	}, function(err){
		console.log(err);
	})

	$scope.postComment = function(data){
		$scope.comments[index].push(data);
		$http.post(prefix_url + 'comments/' + $scope.blogs[$scope.index].id, $scope.comments).then(function(data){
			$scope.comments = data.data;
			console.log(data);
		}, function(err){
			console.log(err);
		})
	}
}])