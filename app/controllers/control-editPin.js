"use strict";

app.controller("editPinCtrl", function($scope, pinFactory, $location, userFactory, $routeParams){

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
//this calls the pinFactory to get a single pin with the function. $routeParams.itemId grabs the itemId from the URL. 
   const showEditPin = function(){
    	pinFactory.getSinglePin($routeParams.itemId)
    	.then((data) => {
    		console.log("data", data);
    		$scope.pin = data;
    		$scope.pin.id = $routeParams.itemId;
    	});
    };

	$scope.submitPin = function(){
		pinFactory.editPin($routeParams.itemId, $scope.pin)
		.then((data) => {
			$location.url("/pinList");
		});
	};

	showEditPin();
});