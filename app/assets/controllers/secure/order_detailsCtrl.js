angular.module('myApp').controller('order_detailsCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'HospitalService',
  'id',
  '$state',
  'toastr',
  '$rootScope',
  'prefix_url', function($anchorScroll,$scope,$http,HospitalService,id, $state, toastr,$rootScope,prefix_url){
	$anchorScroll();
  $rootScope.title = 'Order Details';
	$http.get(prefix_url + 'order/' + id).then(function(data){
		$scope.orderData = data.data[0];
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
   		var params = {
   			id : $scope.orderData._id,
   			status : newStatus,
        products : $scope.orderData.products,
        date : $scope.orderData.date,
        ref_id : $scope.orderData.ref_id,
        total_amount : $scope.orderData.total_amount,
        deal_with : $scope.orderData.deal_with,
        contact_details : $scope.orderData.contact_details
   		}
		$http.post(prefix_url + 'order/status', params).then(function(data){
          toastr.success('The Requester Hospital is sent an email regarding the status change.', 'Status Changed!');
       		$state.go('secure.orders');
    	}, function(err){
      		console.log(err);
          toastr.error(err, 'Error');
    	})
	}
}])
