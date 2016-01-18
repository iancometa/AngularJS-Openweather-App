// Controller

weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService){

	$scope.city = cityService.city;

	$scope.watch('city', function(){
		cityService.city = $scope.city;
	});

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', 'cityService', function($scope, $resource, cityService){

	$scope.city = cityService.city;

	$scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

	$scope.weatherResult = $scope.weatherAPI.get({q:city, cnt:2, appid:'2de143494c0b295cca9337e1e96b00e0'});

}]);