"use strict";

app.controller('pinListCtrl', function($scope, pinFactory, userFactory){

	$scope.pins = [];
	let user = userFactory.getCurrentUser();
	console.log("user list", user);

	const showAllPins = function(){
		pinFactory.getAllPins(user)
		.then((pins) => {
			console.log("showAllPins from promise", pins);
			$scope.pins = pins;
		});
	};

	$scope.deletePin = function(id){
		pinFactory.deletePin(id)
		.then((irrelevant) => {
			showAllPins();
		});
	};
	showAllPins();
});