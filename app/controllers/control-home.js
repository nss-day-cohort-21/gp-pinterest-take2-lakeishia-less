"use strict";

/*
    Provides the data and functionality to populate the home page with random assortment of pins using the factory-home page.
 */


 app.controller("homeCtrl", function($scope, pinFactory) {

 	$scope.pins = [];
 	const showAllPins = function() {
 		pinFactory.getAllPins
 		.then((pins) => {
 			console.log ("pins in home-controller", pins);
 		});
 	};
 });
