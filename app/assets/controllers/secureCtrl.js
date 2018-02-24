angular.module('myApp').controller('secureCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'user',
  'HospitalService',
  '$stateParams',
  'prefix_url', function($anchorScroll,$scope,$http,user,HospitalService,$stateParams,prefix_url){
	$anchorScroll();
	$scope.userData = HospitalService.user;
	console.log($stateParams);


	$scope.donateItem = function(donateData){
		var params = {

		}
	}

	$scope.requestItem = function(){
		
	}

	$scope.logout = function(){
		
	}   

	$scope.exportData = function(){
		
	}

	$scope.updateProfile = function(){
		
	} 
}])