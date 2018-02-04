angular.module('myApp').controller('contact_usCtrl', ['anchorScroll','$scope','prefix_url','$http', function($routeParams,$scope,prefix_url,$http){
	$scope.sendFeeback = function(data){
		data.date = new Date();
        $http.post(prefix_url + 'feedback').then(function(data){
            alert('Received Feedback! Thank you for precious time to send us feedback. ')
            $scope.feedbackData = {};
            $anchorScroll();
        }, function(err){
            console.log(err);
        })
    }
}])