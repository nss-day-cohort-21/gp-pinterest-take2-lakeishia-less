"use strict";

app.controller('boardListCtrl', function($scope, boardFactory, userFactory){
//This has the same functionality as the pinsList, but stores the board information into an array. 
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

	$scope.test = [
	{
	name: "austin"
	},
	{
	name: "Matt"
	},
	{
	name: "Malcolm"
	},
	{
	name: "Tyler"
	}
	];
	showAllBoards();
});