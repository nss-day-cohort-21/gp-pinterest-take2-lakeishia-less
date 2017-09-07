"use strict";

app.controller("addNewBoardCtrl", function($scope, boardFactory, $location, userFactory){

	$scope.title = "Create A New Board";
	$scope.submitButtonText = "Add New Board";
	let user = userFactory.getCurrentUser();

	$scope.board = {
		boardID: "",
		description: "",
		imageURL: "",
		category: "",
		title: "",
		uid: user
	};

	$scope.submitBoard = function(){
		boardFactory.addBoard($scope.board)
		.then((data) => {
			$location.url("/boardList");
		});
	};

});