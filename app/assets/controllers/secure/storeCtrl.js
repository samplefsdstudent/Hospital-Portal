angular.module('myApp').controller('storeCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'HospitalService',
  'prefix_url', function($anchorScroll,$scope,$http,HospitalService,prefix_url){
	$anchorScroll();
	$scope.equipments = [];
	$scope.dataFilter = {
		price : 100,
		qty : 50

	}
	$scope.filter = 'diagnostic';
	if(!HospitalService.equipments.length){
		$http.get(prefix_url + 'equipments').then(function(data){
			$scope.equipments = data.data;
			HospitalService.equipments = $scope.equipments;
			console.log($scope.equipments);
		}, function(err){
			console.log(err);
		})
	}else{
		$scope.equipments = HospitalService.equipments;
	}

	$scope.addToCart = function(data, index){
		console.log(data);
		if(!data.status){
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
			alert(`"${data.name}" is added to your Cart!`);
			$scope.equipments[index].status = true;
			HospitalService.equipments[index].status = true;
			console.log($scope.equipments[index]);
			return true;
		}else{
			for(var i=0;i < HospitalService.cart.length;i++){
				if(angular.equals(HospitalService.cart[i].name, data.name))
					HospitalService.cart.splice(i,1);
					break;
			}
			alert(`"${data.name}" is removed from your Cart!`);
			console.log(HospitalService.cart);
			HospitalService.equipments[index] = false;
			$scope.equipments = HospitalService.equipments;
			return true;
		}
	}

	$scope.switch = function(value, data, index){
		var bool = $scope.addToCart(data,index)
		if(bool){
			return (value) ? $scope.equipments[index].status = false : $scope.equipments[index].status = true
		}
	}
}])