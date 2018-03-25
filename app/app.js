'use strict';
var myApp = angular.module('myApp', ['ui.router','angular-img-cropper','ngAnimate', 'toastr','ngSanitize', 'ngCsv'])
 .value('prefix_url','https://hospital-fsd.herokuapp.com/api/')
  //.value('prefix_url','http://hospital-portal-samplefsdstudent250400.codeanyapp.com:3000/api/')
 //.value('prefix_url','http://localhost:5000/api/')
  .config(['$stateProvider', '$locationProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $locationProvider,$urlRouterProvider, $httpProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $httpProvider.interceptors.push('AuthInterceptor');

    $stateProvider
        .state('app', {
            abstract : true,
            views: {
                'mainContent': {
                    templateUrl: '/templates/app.html',
                    controller : 'appCtrl'
                }
            }
        })

        .state('app.home', {
            url : '/home',
            cache:true,
            views: {
                'subContent': {
                    templateUrl: '/templates/home.html',
                    controller : 'homeCtrl'
                }
            }
        })

        .state('app.about', {
            url : '/about-us',
            cache:true,
            views: {
                'subContent': {
                    templateUrl: '/templates/about_us.html',
                    controller : 'about_usCtrl'
                }
            }
        })

        .state('app.login', {
            url : '/login',
            cache:true,
            views: {
                'subContent': {
                    templateUrl: '/templates/login.html',
                    controller : 'loginCtrl'
                }
            }
        })

        .state('app.signup', {
            url : '/signup',
            cache:true,
            views: {
                'subContent': {
                    templateUrl: '/templates/signup.html',
                    controller : 'signupCtrl'
                }
            }
        })

        .state('app.contact', {
            url : '/contact-us',
            cache:true,
            views: {
                'subContent': {
                    templateUrl: '/templates/contact_us.html',
                    controller : 'contact_usCtrl'
                }
            }
        })

        .state('secure', {
            abstract : true,
            url : '/secure/:user',
            views: {
                'mainContent': {
                    templateUrl: '/templates/secure.html',
                    controller : 'secureCtrl'
                },
                'sidebar@secure' : {
                    templateUrl: '/templates/sidebar.html',
                    controller : 'sidebarCtrl'
                }
            },
            resolve: {
                user: ["$stateParams", function($stateParams) {
                    return $stateParams.user
                }]
            }
        })

        .state('secure.dashboard', {
            url : '/dashboard',
            cache:true,
            views: {
                'dashContent@secure': {
                    templateUrl: '/templates/secure/dashboard.html',
                    controller : 'dashboardCtrl'
                }
            }
        })


        .state('secure.orders', {
            url : '/track-order',
            cache:true,
            views: {
                'dashContent@secure': {
                    templateUrl: '/templates/secure/orders.html',
                    controller : 'orderCtrl'
                }
            }
        })

        .state('secure.order_details', {
            url : '/order-details/:id',
            cache:true,
            views: {
                'dashContent@secure': {
                    templateUrl: '/templates/secure/order_details.html',
                    controller : 'order_detailsCtrl'
                }
            },
            resolve: {
                id: ["$stateParams", function($stateParams) {
                    return $stateParams.id
                }]
            }
        })

        .state('secure.hospitals', {
            url : '/hospitals',
            cache:true,
            views: {
                'dashContent@secure': {
                    templateUrl: '/templates/secure/hospitals.html',
                    controller : 'hospitalCtrl'
                }
            }
        })

        .state('secure.profile', {
            url : '/hospital-profile',
            cache:true,
            views: {
                'dashContent@secure': {
                    templateUrl: '/templates/secure/profile.html',
                    controller : 'profileCtrl'
                }
            }
        })

        .state('secure.store', {
            url : '/live-store',
            cache:true,
            views: {
                'dashContent@secure': {
                    templateUrl: '/templates/secure/store.html',
                    controller : 'storeCtrl'
                }
            }
        })

        .state('secure.shopping_cart', {
            url : '/shopping-cart',
            cache:true,
            views: {
                'dashContent@secure': {
                    templateUrl: '/templates/secure/shopping_cart.html',
                    controller : 'shopping_cartCtrl'
                }
            }
        })

        .state('secure.statistics-report', {
            url : '/statistics-report',
            cache:true,
            views: {
                'dashContent@secure': {
                    templateUrl: '/templates/secure/export-report.html',
                    controller : 'export-reportCtrl'
                }
            }
        })

        .state('secure.donate_form', {
            url : '/donate-equipment-form',
            cache:true,
            views: {
                'dashContent@secure': {
                    templateUrl: '/templates/secure/donate_equipment_form.html',
                    controller : 'donate_equipmentCtrl'
                }
            }
        })

        .state('secure.confirmation', {
            url : '/confirmation/:id',
            cache:true,
            views: {
                'dashContent@secure': {
                    templateUrl: '/templates/secure/confirmation.html',
                    controller : 'confirmationCtrl'
                }
            },
            resolve: {
                id: ["$stateParams", function($stateParams) {
                    return $stateParams.id
                }]
            }
        })
        
        $urlRouterProvider.otherwise(function ($injector, $location) {
            var $state = $injector.get('$state');
            $state.go('app.home');
         });
  }])

.controller('mainCtrl', ['$anchorScroll',
    '$scope',
    '$http',
    'prefix_url',
    'HospitalService',
    '$rootScope', function($anchorScroll,$scope,$http,prefix_url,HospitalService,$rootScope){
      $scope.length = HospitalService.cart.length;
      $scope.subscribeNewsletter = function(data){
        data.date = new Date();
        $http.post(prefix_url + 'newsletter', data).then(function(data){
            alert('Success! You have subscribed with our Newsletter Service. ')
            $scope.feedbackData = {};
            $anchorScroll();
        }, function(err){
            console.log(err);
        })
      };

      $rootScope.$on('badgeUpdate', function(event, data) {
        $scope.length = data;
        console.log('badge');
      });
}])

.factory('HospitalService', function() {
    return {
        cart : [],
        equipments : [],
        user : {},
        hospital : undefined
    }
})

.factory('AuthInterceptor', ['$q', '$location', '$window', function ($q, $location, $window) {
    return {
        'request': function (config) {
            config.headers = config.headers || {};
            if ($window.localStorage.getItem('access_token')) {
                config.headers["x-access-token"] = $window.localStorage.getItem('access_token');
            }
            return config;
        },
        'responseError': function (response) {
            if (response.status === 401 || response.status === 403) {
                $location.path('/login');
            }
            return $q.reject(response);
        }
    };
}])

.filter('capitalize', function() {
  return function(input) {
   if(input){
        return (typeof input === 'number') ? input : (input.toString().match(/(\d+)(-|\/)(\d+)(?:-|\/)(?:(\d+)\s+(\d+):(\d+)(?::(\d+))?(?:\.(\d+))?)?/)) ? input = new Date(input).getDate() + '-' + (new Date(input).getMonth() + 1) + '-' + new Date(input).getFullYear() :  (input.split('_').length != 2) ? input.split('_')[0][0].toUpperCase() + input.substr(1, input.length)  : input.split('_')[0][0].toUpperCase() + input.split('_')[0].substr(1, input.split('_')[0].length) + " " + input.split('_')[1][0].toUpperCase() + input.split('_')[1].substr(1, input.split('_')[1].length);
   }
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
