var myApp = angular.module('myApp', []);

myApp.controller('ctrl', ['$scope', '$http', function ($scope, $http) {

	// IMAGE UPLOAD
	$scope.giveImage = function (image) {
		$http.post('/questions').
		success(function (data, status, heders, config) {
			console.log('Very surprised this worked...');
		}).
		error(function (data, status, headers, config) {
			console.log('No idea what I am doing!');
		})
	}
	// END IMAGE UPLOAD
	

	$scope.questions = [];
	$scope.articles = [];


	$scope.loadAllContent = function () {
		$http.get('/questions').
			success(function (data, status, headers, config) {
				$scope.questions = data;
			}).
			error(function (data, status, headers, config) {
				console.log('error on http.get questions res post magic side');
			});

		// $http.get('/articles').
		// 	success(function (data, status, headers, config) {
		// 		//do nothing
		// 	}).
		// 	error(function (data, status, headers, config) {
		// 		console.log('error on http.get articles res post magic side');
		// 	});
	}


	$scope.loadAllContent();



	$scope.postQuestion = function (newQuestion) {
		$scope.jsonquestion = {
			question: newQuestion,
			timestamp: new Date()
		}

		$http.post('/questions', $scope.jsonquestion).
			success(function (data, status, headers, config) {
				$scope.questions.push(data);
			}).
			error(function (data, status, headers, config) {
				console.log('error on http.get res post magic side');
			});
	}



	$scope.addArticle = function (title, subtext, link, parentId) {
		$scope.newArticle = {
			title: title,
			subtext: subtext,
			link: link,
			parentId: parentId,
			votes: 0,
			timestamp: new Date()
		}
		
		$http.post('/articles', $scope.newArticle).
			success(function (data, status, headers, config) {
				// $scope.loadAllContent();
			}).
			error(function (data, status, headers, config) {
				console.log('error on articles http post res magic side');
			});
		$scope.loadAllContent();
	}



	$scope.upVote = function (article) {
		console.log(article);
		$http.put('/articles', article).
			success(function (data, status, headers, config) {
				//do nothing
			}).
			error(function (data, status, headers, config) {
				console.log('error on http.put res post magic side');
			});
		$scope.loadAllContent();
	}



}]);