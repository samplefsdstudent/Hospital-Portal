'use strict';
var myApp = angular.module('myApp', ['ngRoute'])
  .config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl : 'templates/home.html',
        controller : 'homeCtrl'
    })
    .when('/about-us', {
        templateUrl : 'templates/about_us.html',
        controller : 'about_usCtrl'
    })
    .when('/blog-details/:id', {
        templateUrl : 'templates/blog_details.html',
        controller : 'blog_detailCtrl'
    })
    .when('/contact-us', {
        templateUrl : 'templates/contact_us.html',
        controller : 'contact_usCtrl'
    })
    .when('/our-blog', {
        templateUrl : 'templates/our_blog.html',
        controller : 'our_blogCtrl'
    })
    .when('/our-gallery', {
        templateUrl : 'templates/our_gallery.html',
        controller : 'our_galleryCtrl'
    })
    .when('/our-menu', {
        templateUrl : 'templates/our_menu.html',
        controller : 'our_menuCtrl'
    })
    .when('/reservation', {
        templateUrl : 'templates/reservation.html',
        controller : 'reservationCtrl'
    })
    .when('/search', {
        templateUrl : 'templates/search.html',
        controller : 'searchCtrl'
    })
    .when('/shops', {
        templateUrl : 'templates/shops.html',
        controller : 'shopCtrl'
    })
    .when('/shop-details/:id', {
        templateUrl : 'templates/shop_details.html',
        controller : 'shop_detailsCtrl'
    })
    .when('/shopping-cart', {
        templateUrl : 'templates/shopping_cart.html',
        controller : 'shopping_cartCtrl'
    })
    .when('/testimonials', {
        templateUrl : 'templates/testimonials.html',
        controller : 'testimonialCtrl'
    })
    .otherwise({redirectTo : '/'});

    $locationProvider.html5Mode(true);

  }])

  .factory('RestaurantService', function() {
    return {
        cart : [],
        recipes : [{
        name : "Food Title 1",
        image : "assets/images/our-menu/01.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "all"
    },{
        name : "Food Title 2",
        image : "assets/images/our-menu/04.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "all"
    },{
        name : "Food Title 3",
        image : "assets/images/our-menu/07.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "all"
    },{
        name : "Food Title 4",
        image : "assets/images/our-menu/02.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "all"
    },{
        name : "Food Title 5",
        image : "assets/images/our-menu/05.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "all"
    },{
        name : "Food Title 6",
        image : "assets/images/our-menu/08.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "all"
    },{
        name : "Food Title 7",
        image : "assets/images/our-menu/03.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "all"
    },{
        name : "Food Title 8",
        image : "assets/images/our-menu/06.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "all"
    },{
        name : "Food Title 9",
        image : "assets/images/our-menu/09.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "all"
    },{
        name : "Food Title 10",
        image : "assets/images/our-menu/07.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "breakfast"
    },{
        name : "Food Title 11",
        image : "assets/images/our-menu/02.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "breakfast"
    },{
        name : "Food Title 12",
        image : "assets/images/our-menu/01.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "breakfast"
    },{
        name : "Food Title 13",
        image : "assets/images/our-menu/04.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "breakfast"
    },{
        name : "Food Title 14",
        image : "assets/images/our-menu/05.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "breakfast"
    },{
        name : "Food Title 15",
        image : "assets/images/our-menu/06.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "breakfast"
    },{
        name : "Food Title 16",
        image : "assets/images/our-menu/09.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "breakfast"
    },{
        name : "Food Title 17",
        image : "assets/images/our-menu/08.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "breakfast"
    },{
        name : "Food Title 18",
        image : "assets/images/our-menu/01.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "all"
    },{
        name : "Food Title 19",
        image : "assets/images/our-menu/04.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "all"
    },{
        name : "Food Title 20",
        image : "assets/images/our-menu/07.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "all"
    },{
        name : "Food Title 21",
        image : "assets/images/our-menu/02.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "all"
    },{
        name : "Food Title 22",
        image : "assets/images/our-menu/05.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "all"
    },{
        name : "Food Title 23",
        image : "assets/images/our-menu/08.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "all"
    },{
        name : "Food Title 24",
        image : "assets/images/our-menu/03.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "all"
    },{
        name : "Food Title 25",
        image : "assets/images/our-menu/06.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "all"
    },{
        name : "Food Title 26",
        image : "assets/images/our-menu/09.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "all"
    },{
        name : "Food Title 27",
        image : "assets/images/our-menu/07.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "breakfast"
    },{
        name : "Food Title 28",
        image : "assets/images/our-menu/02.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "breakfast"
    },{
        name : "Food Title 29",
        image : "assets/images/our-menu/01.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "breakfast"
    },{
        name : "Food Title 30",
        image : "assets/images/our-menu/04.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "breakfast"
    },{
        name : "Food Title 31",
        image : "assets/images/our-menu/05.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "breakfast"
    },{
        name : "Food Title 32",
        image : "assets/images/our-menu/06.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "breakfast"
    },{
        name : "Food Title 33",
        image : "assets/images/our-menu/09.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "breakfast"
    },{
        name : "Food Title 34",
        image : "assets/images/our-menu/08.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "breakfast"
    },{
        name : "Food Title 35",
        image : "assets/images/our-menu/01.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "lunch"
    },{
        name : "Food Title 36",
        image : "assets/images/our-menu/04.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "lunch"
    },{
        name : "Food Title 37",
        image : "assets/images/our-menu/07.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "lunch"
    },{
        name : "Food Title 38",
        image : "assets/images/our-menu/02.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "lunch"
    },{
        name : "Food Title 39",
        image : "assets/images/our-menu/05.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "lunch"
    },{
        name : "Food Title 40",
        image : "assets/images/our-menu/08.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "lunch"
    },{
        name : "Food Title 41",
        image : "assets/images/our-menu/03.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "lunch"
    },{
        name : "Food Title 42",
        image : "assets/images/our-menu/06.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "lunch"
    },{
        name : "Food Title 43",
        image : "assets/images/our-menu/09.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "lunch"
    },{
        name : "Food Title 44",
        image : "assets/images/our-menu/04.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "lunch"
    },{
        name : "Food Title 45",
        image : "assets/images/our-menu/07.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "lunch"
    },{
        name : "Food Title 46",
        image : "assets/images/our-menu/02.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "lunch"
    },{
        name : "Food Title 47",
        image : "assets/images/our-menu/05.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "lunch"
    },{
        name : "Food Title 48",
        image : "assets/images/our-menu/08.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "lunch"
    },{
        name : "Food Title 49",
        image : "assets/images/our-menu/03.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "lunch"
    },{
        name : "Food Title 50",
        image : "assets/images/our-menu/06.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "lunch"
    },{
        name : "Food Title 51",
        image : "assets/images/our-menu/09.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "lunch"
    },{
        name : "Food Title 52",
        image : "assets/images/our-menu/07.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "dinner"
    },{
        name : "Food Title 53",
        image : "assets/images/our-menu/02.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "dinner"
    },{
        name : "Food Title 54",
        image : "assets/images/our-menu/01.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "dinner"
    },{
        name : "Food Title 55",
        image : "assets/images/our-menu/04.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "dinner"
    },{
        name : "Food Title 56",
        image : "assets/images/our-menu/05.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "dinner"
    },{
        name : "Food Title 57",
        image : "assets/images/our-menu/08.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "dinner"
    },{
        name : "Food Title 58",
        image : "assets/images/our-menu/03.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "dinner"
    },{
        name : "Food Title 59",
        image : "assets/images/our-menu/09.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "dinner"
    },{
        name : "Food Title 60",
        image : "assets/images/our-menu/06.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "dinner"
    },{
        name : "Food Title 61",
        image : "assets/images/our-menu/01.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "dinner"
    },{
        name : "Food Title 62",
        image : "assets/images/our-menu/04.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "dinner"
    },{
        name : "Food Title 63",
        image : "assets/images/our-menu/05.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "dinner"
    },{
        name : "Food Title 64",
        image : "assets/images/our-menu/08.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "dinner"
    },{
        name : "Food Title 65",
        image : "assets/images/our-menu/03.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "dinner"
    },{
        name : "Food Title 66",
        image : "assets/images/our-menu/09.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "dinner"
    },{
        name : "Food Title 67",
        image : "assets/images/our-menu/06.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "dinner"
    },{
        name : "Food Title 68",
        image : "assets/images/our-menu/01.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "others"
    },{
        name : "Food Title 69",
        image : "assets/images/our-menu/04.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "others"
    },{
        name : "Food Title 70",
        image : "assets/images/our-menu/07.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "others"
    },{
        name : "Food Title 71",
        image : "assets/images/our-menu/02.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "others"
    },{
        name : "Food Title 72",
        image : "assets/images/our-menu/05.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "others"
    },{
        name : "Food Title 73",
        image : "assets/images/our-menu/08.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "others"
    },{
        name : "Food Title 74",
        image : "assets/images/our-menu/03.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "others"
    },{
        name : "Food Title 75",
        image : "assets/images/our-menu/09.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "others"
    },{
        name : "Food Title 76",
        image : "assets/images/our-menu/07.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "others"
    },{
        name : "Food Title 77",
        image : "assets/images/our-menu/01.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "others"
    },{
        name : "Food Title 78",
        image : "assets/images/our-menu/04.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "others"
    },{
        name : "Food Title 79",
        image : "assets/images/our-menu/07.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "others"
    },{
        name : "Food Title 80",
        image : "assets/images/our-menu/02.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "others"
    },{
        name : "Food Title 81",
        image : "assets/images/our-menu/05.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "others"
    },{
        name : "Food Title 82",
        image : "assets/images/our-menu/08.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "others"
    },{
        name : "Food Title 83",
        image : "assets/images/our-menu/03.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "others"
    },{
        name : "Food Title 84",
        image : "assets/images/our-menu/09.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "others"
    },{
        name : "Food Title 85",
        image : "assets/images/our-menu/07.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "others"
    },{
        name : "Food Title 86",
        image : "assets/images/our-menu/02.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "drinks"
    },{
        name : "Food Title 87",
        image : "assets/images/our-menu/01.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "drinks"
    },{
        name : "Food Title 88",
        image : "assets/images/our-menu/04.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "drinks"
    },{
        name : "Food Title 89",
        image : "assets/images/our-menu/05.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "drinks"
    },{
        name : "Food Title 90",
        image : "assets/images/our-menu/08.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "drinks"
    },{
        name : "Food Title 91",
        image : "assets/images/our-menu/09.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "drinks"
    },{
        name : "Food Title 92",
        image : "assets/images/our-menu/03.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "drinks"
    },{
        name : "Food Title 93",
        image : "assets/images/our-menu/06.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "drinks"
    },{
        name : "Food Title 94",
        image : "assets/images/our-menu/02.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "drinks"
    },{
        name : "Food Title 95",
        image : "assets/images/our-menu/01.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "drinks"
    },{
        name : "Food Title 96",
        image : "assets/images/our-menu/04.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "drinks"
    },{
        name : "Food Title 97",
        image : "assets/images/our-menu/05.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "drinks"
    },{
        name : "Food Title 98",
        image : "assets/images/our-menu/08.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "drinks"
    },{
        name : "Food Title 99",
        image : "assets/images/our-menu/09.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "drinks"
    },{
        name : "Food Title 100",
        image : "assets/images/our-menu/03.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "drinks"
    },{
        name : "Food Title 101",
        image : "assets/images/dishes/01.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "dish"
    },{
        name : "Food Title 102",
        image : "assets/images/dishes/02.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "dish"
    },{
        name : "Food Title 103",
        image : "assets/images/dishes/03.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "dish"
    },{
        name : "Food Title 104",
        image : "assets/images/dishes/04.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "dish"
    },{
        name : "Food Title 105",
        image : "assets/images/dishes/05.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "dish"
    },{
        name : "Food Title 106",
        image : "assets/images/dishes/01.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "dish"
    },{
        name : "Food Title 107",
        image : "assets/images/dishes/02.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "dish"
    },{
        name : "Food Title",
        image : "assets/images/dishes/03.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "dish"
    },{
        name : "Food Title 109",
        image : "assets/images/dishes/04.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "dish"
    },{
        name : "Food Title 110",
        image : "assets/images/dishes/05.jpg",
        price : 35,
        number : 1,
        rating : 4,
        checked : false,
        description : "Cursus / Dictum / Risus",
        type : "dish"
    }]
    }
  });