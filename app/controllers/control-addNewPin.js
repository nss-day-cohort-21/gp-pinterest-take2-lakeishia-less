"use strict";

app.controller("addNewPinCtrl", function($scope, pinFactory, $location, userFactory){

	$scope.title = "Create A New Pin";
	$scope.submitButtonText = "Add New Pin";
	let user = userFactory.getCurrentUser();

	$scope.pin = {
		boardID: "",
		description: "",
		imageURL: "",
		siteURL: "",
		title: "",
		uid: user
	};

	$scope.submitPin = function(){
		pinFactory.addPin($scope.pin)
		.then((data) => {
			$location.url("/pinList");
		});
	};

});