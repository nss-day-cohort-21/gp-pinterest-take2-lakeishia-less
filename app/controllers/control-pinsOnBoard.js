"use strict";

app.controller('BoardPinsCtrl', function($scope, $location, pinFactory, userFactory){

	$scope.boardPins = [];
	
	$scope.showAllBoardPins = function(boardID){

		pinFactory.getAllPinsByBoard(boardID)
		.then((boardPins) => {
			console.log("showFiltered " + boardID + " from promise", boardPins);
			$scope.boardPins = boardPins;
			$location.path('/pinsOnBoard');

		});
	};
    // showAllBoardPins();
});