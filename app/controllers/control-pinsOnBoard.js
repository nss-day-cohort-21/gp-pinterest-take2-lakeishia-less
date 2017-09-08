"use strict";

app.controller('BoardPinsCtrl', function($scope, $location,  pinFactory, userFactory){

	$scope.boardPins = [];
	let boardID = pinFactory.getAllPinsByBoard();
	
	const showAllBoardPins = function(){
		pinFactory.getAllPinsByBoard(boardID)
		.then((boards) => {
			console.log("showAllBoards from promise", boards);
			$scope.boardPins = boardPins;
		});
	};
    showAllBoardPins();
});