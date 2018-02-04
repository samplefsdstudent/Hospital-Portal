angular.module('myApp').controller('reservationCtrl', ['$anchorScroll','$scope','$http', 'prefix_url', function($anchorScroll,$scope,$http,prefix_url){
	$anchorScroll();
	$scope.doReservation = function(data){
		var name = data.name;
		$http.post(prefix_url + 'reservation', data).then(function(data){
			alert('Hi ' + name + ' ,Booking is done! Please check your email for details.')
			$anchorScroll();
			$scope.reserveData = {
				person_count : 0
			}
		}, function(err){
			alert('Error! Try after some time.')
		})
	}
}])