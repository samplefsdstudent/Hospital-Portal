angular.module('myApp').controller('about_usCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  '$rootScope',
  'prefix_url', function($anchorScroll,$scope,$http,$rootScope,prefix_url){
	$anchorScroll();
	// $http.get(prefix_url + 'members').then(function(data){
	// 	$scope.members = data.data;
	// }, function(err){
	// 	console.log(err);
	// })
	$rootScope.title = 'About Us';
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
}])