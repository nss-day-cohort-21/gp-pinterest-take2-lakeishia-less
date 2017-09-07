"use strict";

app.controller("editPinCtrl", function($scope, pinFactory, $location, userFactory){

	$scope.title = "Edit Pin";
	$scope.submitButtonText = "Edit Pin";
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