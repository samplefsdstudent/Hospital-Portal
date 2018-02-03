'use strict';
var myApp = angular.module('myApp', ['ngRoute','naif.base64'])
  .value('prefix_url','http://restaurant-express-server.herokuapp.com/api/')

  .config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/home', {
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
    .when('/shopping-cart', {
        templateUrl : 'templates/shopping_cart.html',
        controller : 'shopping_cartCtrl'
    })
    .when('/testimonials', {
        templateUrl : 'templates/testimonials.html',
        controller : 'testimonialCtrl'
    })
    .otherwise({redirectTo : '/home'});

    $locationProvider.html5Mode(true);

  }])

.factory('RestaurantService', function() {
    return {
        cart : [],
        recipes : []
    }
})

.directive('ngConfirmClick', [
        function(){
            return {
                link: function (scope, element, attr) {
                    var msg = attr.ngConfirmClick || "Are you sure?";
                    var clickAction = attr.confirmedClick;
                    element.bind('click',function (event) {
                        if ( window.confirm(msg) ) {
                            scope.$eval(clickAction)
                        }
                    });
                }
            };
    }])

.directive('ngRepeatOwlCarousel', function() {
    return {
      restrict: 'A',
      scope: {
        carouselInit: '&'
      },
      link: function(scope, element, attrs) {
        if ((scope.$parent != null) && scope.$parent.$last) {
          return scope.carouselInit()();
        }
      }
    };
});