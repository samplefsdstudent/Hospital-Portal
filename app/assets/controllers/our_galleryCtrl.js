angular.module('myApp').controller('our_galleryCtrl', ['$routeParams', '$scope','$http','prefix_url', function($routeParams,$scope,$http, prefix_url){
	$scope.showData = {};

	$http.get(prefix_url + 'gallery').then(function(data){
		$scope.images = data.data;
	}, function(err){
		console.log(err);
	})

	$scope.showImage = function(index, flag){
		if(flag == 0){
			$scope.showData.src = $scope.images[index].src;
			$scope.showData.index = index;
			angular.element('#myModal').modal('show');
		}else if((flag == 1) && (index >= 0)){
			$scope.showData.src = $scope.images[index].src;
			$scope.showData.index = index;
		}
	};
}])