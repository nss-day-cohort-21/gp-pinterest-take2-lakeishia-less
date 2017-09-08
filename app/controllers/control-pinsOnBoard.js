"use strict";

app.controller('BoardPinsCtrl', function($scope, $location, pinFactory, userFactory){

	$scope.boardPins = [];
	
	$scope.showAllBoardPins = function(boardID){
		pinFactory.getAllPinsByBoard(boardID)
		.then((boardPins) => {
			$location.path('/pinsOnBoard');
			console.log("showFiltered " + boardID + " from promise", boardPins);
			$scope.boardPins = boardPins;
			
		});
	};
    // showAllBoardPins();
});