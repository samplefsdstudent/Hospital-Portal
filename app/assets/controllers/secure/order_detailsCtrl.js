angular.module('myApp').controller('order_detailsCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'HospitalService',
  'id',
  'prefix_url', function($anchorScroll,$scope,$http,HospitalService,id,prefix_url){
	$anchorScroll();
	$http.get(prefix_url + 'order/' + id).then(function(data){
		$scope.orderData = data.data;
		(angular.equals(HospitalService.user.type, "donor")) ? requestHospital(true) : requestHospital(false);
	}, function(err){
		console.log(err);
	})

	function requestHospital(status){
		var id;
		if(status){
			id = $scope.orderData.deal_with;
      $scope.show = "REQUESTER";
      $scope.status = true;
		}else{
			id = $scope.orderData.donated_by;
      $scope.show = "DONOR"
		}
		console.log('<<<<<<<<<<<<<<<<<<<<<<<<<< statusm, id', status, id);
		$http.get(prefix_url + 'hospital/' + id).then(function(data){
			data = data.data;
       		$scope.orderData.contact_details = {
       			name : data.name,
       			email : data.email,
       			mobile_no : data.mobile_no,
       			joined_on : data.created_on
       		};
    	}, function(err){
      		console.log(err);
    	})
	}

	$scope.statusUpdate = function(newStatus){
    console.log('<<<<<<<<<< statusUpdate', $scope.orderData);
   		var params = {
   			id : id,
   			status : newStatus
   		}
		$http.post(prefix_url + 'order/status', params).then(function(data){
     		alert('Status Changed! The Requester Hospital is sent an email regarding status change.');
       		$scope.orderData = data.data;
       		$anchorScroll();
    	}, function(err){
      		console.log(err);
    	})
	}
}])
