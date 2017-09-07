"use strict";
//The controller that allows user to submit their own pin. This controller is attached to the newPinForm partial.
app.controller("addNewPinCtrl", function($scope, pinFactory, $location, userFactory){

//Modularizes the title and submitButtonText on newPinForm. The user variable pulls in the uid for the Scope.Pin object. 
	$scope.title = "Create A New Pin";
	$scope.submitButtonText = "Add New Pin";
	let user = userFactory.getCurrentUser();

//Scopes and creates an object that is waiting for the ng-model input in newPinForm.
	$scope.pin = {
		boardID: "",
		description: "",
		imageURL: "",
		siteURL: "",
		title: "",
		uid: user
	};
//This defaults back to pinList screen after you submit your pin. 
	$scope.submitPin = function(){
		pinFactory.addPin($scope.pin)
		.then((data) => {
			$location.url("/pinList");
		});
	};

});