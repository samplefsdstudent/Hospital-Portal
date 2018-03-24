angular.module('myApp').controller('homeCtrl', [
 '$scope',
 'HospitalService',
 '$http',
 'prefix_url',
 '$anchorScroll',
 '$location',
 '$state',
 '$rootScope', function($scope, HospitalService, $http,prefix_url,$anchorScroll,$location,$state,$rootScope){
   $anchorScroll();
   $scope.filter = 'all';
   $rootScope.title = 'Home';
   $scope.reserveData = {
	 person_count : 1
   };
   
	$scope.services = [{
		name : "Items Availability",
		image : "../assets/images/about/icon1.png",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id."
	},{
		name : "Only Transport Cost Paid",
		image : "../assets/images/about/icon2.png",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id."
	},{
		name : "Order in Bulk",
		image : "../assets/images/about/icon3.png",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id."
	},{
		name : "Special Offers",
		image : "../assets/images/about/icon4.png",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id."
	},{
		name : "Any Payment Mode",
		image : "../assets/images/about/icon5.png",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id."
	},{
		name : "Hospitals Availability",
		image : "../assets/images/about/icon6.png",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id."
	}];

	$scope.navigator = function(flag){
		if(flag == 0)
			$state.go('app.login');
		else if(flag == 1)
			$state.go('app.signup');
	}
}])