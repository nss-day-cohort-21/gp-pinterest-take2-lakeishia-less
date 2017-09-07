"use strict";

app.controller("editBoardCtrl", function($scope, boardFactory, $location, userFactory){

	$scope.title = "Edit Board";
	$scope.submitButtonText = "Edit Board";
	let user = userFactory.getCurrentUser();

		$scope.board = {
		boardID: "",
		description: "",
		imageURL: "",
		siteURL: "",
		title: "",
		uid: user
	};

	$scope.submitBoard = function(){
		boardFactory.addPin($scope.board)
		.then((data) => {
			$location.url("/boardList");
		});
	};

});