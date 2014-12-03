var app = angular.module('app', []);

app.controller('ctrl', ['$scope', '$http', function ($scope, $http) {

	//Example $http.get
	// $http.get('/toasts').
	// 	success(function (data, status, headers, config) {
	// 		console.log(data);
	// 		$scope.list.push(data);
	// 		console.log($scope.list);
	// 	}).
	// 	error(function(data, status, headers, config) {
	// 		console.log('error on http.get res post magic side');
	// 	});

	//Example $http.post
	// $http.post('/api', variableName).
	// 	success(function(data, status, headers, config) {
	// 		sublist.push(data);
	// 	}).
	// 	error(function(data, status, headers, config) {
	// 		console.log('error on http.post res post magic side');
	// 	});


}])