angular.module('myApp').controller('about_usCtrl', ['$routeParams','$scope', function($routeParams,$scope){
	$scope.members = [{
		name : "John Doe",
		image : "../assets/images/about/1.jpg",
		description : "orem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra risus mauris, eget tristique augue.",
		facebook_url : "https://facebook.com",
		twitter_url : "https://twitter.com",
		plus_google_url : "https://plus.google.com",
		instagram_url : "https://instagram.com"
	},{
		name : "John Doe",
		image : "../assets/images/about/2.jpg",
		description : "orem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra risus mauris, eget tristique augue.",
		facebook_url : "https://facebook.com",
		twitter_url : "https://twitter.com",
		plus_google_url : "https://plus.google.com",
		instagram_url : "https://instagram.com"
	},{
		name : "John Doe",
		image : "../assets/images/about/3.jpg",
		description : "orem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra risus mauris, eget tristique augue.",
		facebook_url : "https://facebook.com",
		twitter_url : "https://twitter.com",
		plus_google_url : "https://plus.google.com",
		instagram_url : "https://instagram.com"
	},{
		name : "John Doe",
		image : "../assets/images/about/4.jpg",
		description : "orem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra risus mauris, eget tristique augue.",
		facebook_url : "https://facebook.com",
		twitter_url : "https://twitter.com",
		plus_google_url : "https://plus.google.com",
		instagram_url : "https://instagram.com"
	}]

	$scope.services = [{
		name : "Best Chef",
		image : "../assets/images/about/icon1.png",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Mauris a sodales mi, eget lobortis nulla."
	},{
		name : "150 Tables",
		image : "../assets/images/about/icon2.png",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Mauris a sodales mi, eget lobortis nulla."
	},{
		name : "Best Vines",
		image : "../assets/images/about/icon3.png",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Mauris a sodales mi, eget lobortis nulla."
	},{
		name : "Special Offers",
		image : "../assets/images/about/icon4.png",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Mauris a sodales mi, eget lobortis nulla."
	},{
		name : "Card Payment",
		image : "../assets/images/about/icon5.png",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Mauris a sodales mi, eget lobortis nulla."
	},{
		name : "Terrace",
		image : "../assets/images/about/icon6.png",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Mauris a sodales mi, eget lobortis nulla."
	},]

}])