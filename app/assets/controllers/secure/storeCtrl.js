angular.module('myApp').controller('storeCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'HospitalService',
  'prefix_url', function($anchorScroll,$scope,$http,HospitalService,prefix_url){
	$anchorScroll();
	$scope.equipments = [];
	$scope.filter = 'diagnostic';
	$http.get(prefix_url + 'equipments').then(function(data){
		$scope.equipments = data.data;
		HospitalService.equipments = $scope.equipments;
	}, function(err){
		console.log(err);
	})

	$scope.addToCart = function(data, index){
		if(!data.checked){
			HospitalService.cart.push({
			name : data.name,
			image : data.image,
			rating : data.rating,
			number : data.number,
			price : data.price,
			description : data.description,
			type : data.type
			})
			alert(`"${data.name}" is added to your Cart!`);
			$scope.equipments[index].checked = true;
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
			return (value) ? $scope.equipments[index].checked = false : $scope.equipments[index].checked = true
		}
	}
}])