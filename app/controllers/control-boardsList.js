"use strict";

app.controller('boardListCtrl', function($scope, boardFactory, userFactory){

	$scope.boards = [];
	let user = userFactory.getCurrentUser();
	console.log("user list", user);

	const showAllBoards = function(){
		boardFactory.getAllBoards(user)
		.then((boards) => {
			console.log("showAllBoards from promise", boards);
			$scope.boards = boards;
		});
	};

	$scope.deleteBoard = function(id){
		boardFactory.deleteBoard(id)
		.then((irrelevant) => {
					showAllBoards();
		});
	};
	showAllBoards();
});