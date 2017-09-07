"use strict";
//This is bringing in pin data from firebase and storing it in a scoped array.
app.controller('pinListCtrl', function($scope, pinFactory, userFactory){

	$scope.pins = [];
	let user = userFactory.getCurrentUser();
	console.log("user list", user);
//ShowAllPins populates the DOM with just your uid targeted pins from factory-home. 

	const showAllPins = function(){
		pinFactory.getAllPins(user)
		.then((pins) => {
			console.log("showAllPins from promise", pins);
			$scope.pins = pins;
		});
	};

//deletePin is able to remove the targeted pin from the array. 
	$scope.deletePin = function(id){
		pinFactory.deletePin(id)
		.then((irrelevant) => {
			showAllPins();
		});
	};
	showAllPins();
});