angular.module('myApp').controller('our_blogCtrl', ['$routeParams','$scope','$location', function($routeParams,$scope,$location){
	$scope.blogs = [{
		id : 1,
		title : "Blog 1",
		image : "../assets/images/b1.jpg",
		date : "May 15, 2017",
		uploaded_by : "Admin",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan..."
	},{
		id : 2,
		title : "Blog 2",
		image : "../assets/images/b2.jpg",
		date : "May 15, 2017",
		uploaded_by : "Admin",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan..."
	},{
		id : 3,
		title : "Blog 3",
		image : "../assets/images/b3.jpg",
		date : "May 15, 2017",
		uploaded_by : "Admin",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan..."
	},{
		id : 4,
		title : "Blog 4",
		image : "../assets/images/b4.jpg",
		date : "May 15, 2017",
		uploaded_by : "Admin",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan..."
	},{
		id : 5,
		title : "Blog 5",
		image : "../assets/images/b5.jpg",
		date : "May 15, 2017",
		uploaded_by : "Admin",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan..."
	},{
		id : 6,
		title : "Blog 6",
		image : "../assets/images/b6.jpg",
		date : "May 15, 2017",
		uploaded_by : "Admin",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan..."
	},{
		id : 7,
		title : "Blog 7",
		image : "../assets/images/b7.jpg",
		date : "May 15, 2017",
		uploaded_by : "Admin",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan..."
	},{
		id : 8,
		title : "Blog 8",
		image : "../assets/images/b8.jpg",
		date : "May 15, 2017",
		uploaded_by : "Admin",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan..."
	},{
		id : 9,
		title : "Blog 9",
		image : "../assets/images/b9.jpg",
		date : "May 15, 2017",
		uploaded_by : "Admin",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan..."
	}]

	$scope.navigator = function(id){
		$location.path('/blog-details/' + id); 
	}
}])