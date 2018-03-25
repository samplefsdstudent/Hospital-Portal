angular.module('myApp').controller('storeCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'HospitalService',
  '$rootScope',
  'toastr',
  'prefix_url', function($anchorScroll,$scope,$http,HospitalService,$rootScope,toastr,prefix_url){
	$anchorScroll();
	$rootScope.title = 'Live Store';
	$scope.equipments = [];
	$scope.dataFilter = {
		price : 10000,
		qty : 10000

	}
	$scope.filter = 'diagnostic';
	if(!HospitalService.equipments.length){
		$http.get(prefix_url + 'equipments').then(function(data){
			$scope.equipments = data.data;
			HospitalService.equipments = $scope.equipments;
		}, function(err){
			console.log(err);
		})
	}else{
		$scope.equipments = HospitalService.equipments;
	}

	$scope.addToCart = function(data, index){
		if(angular.equals(data.status, "available")){
			HospitalService.cart.push({
			id : data._id,
			name : data.name,
			image : data.image,
			quantity : data.quantity,
			price : data.price,
			description : data.description,
			type : data.type,
			donated_by : data.donated_by.id
			})
			toastr.success(`"${data.name}" is added to your Cart!`, 'Added');
			$scope.FilterEquipments[index].status = 'pending';
			HospitalService.equipments[index].status = 'pending';
			return 'pending';
		}else{
			for(var i=0;i < HospitalService.cart.length;i++){
				if(angular.equals(HospitalService.cart[i].name, data.name))
					HospitalService.cart.splice(i,1);
					break;
			}
			toastr.warning(`"${data.name}" is removed from your Cart!`, 'Removed');
			HospitalService.equipments[index].status = 'available';
			$scope.FilterEquipments[index].status = 'available';
			return 'available';
		}
	}

	$scope.switch = function(value, data, index){
		var bool = $scope.addToCart(data,index)
		if(bool){
			return bool
		}
	}
}])