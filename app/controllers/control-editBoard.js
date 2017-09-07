"use strict";

app.controller("editBoardCtrl", function($scope, pinFactory, $location, userFactory, $routeParams){

	$scope.title = "Edit Board";
	$scope.submitButtonText = "Submit Edit";
	let user = userFactory.getCurrentUser();

		$scope.board = {
		category: "",
		description: "",
		imageURL: "",
		title: "",
		uid: user
	};

   const showEditBoard = function(){
    	pinFactory.getSingleBoard($routeParams.currentboardID)
    	.then((data) => {
    		console.log("data", data);
    		$scope.board = data;
    		$scope.board.id = $routeParams.currentboardID;
    		console.log ("is ID HERE now?", $scope.board.id);
    	});
    };

	$scope.submitBoard = function(){
		pinFactory.editBoard($routeParams.currentboardID, $scope.board)
		.then((data) => {
			$location.url("/boardList");
		});
	};

	showEditBoard();
});