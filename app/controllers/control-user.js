"use strict";
console.log("CtrlUser");

 app.controller("userCtrl", function($scope, $window, userFactory, $location){
 	console.log("UserCTRL Loaded");

 	let logOut = () => {
 		console.log("logged Out clicked");
 		userFactory.logOut()
 		.then(function(){
 			console.log("logged out completed");
 		}, function (error) {
 			console.log("Logout Error");
 		});
 	};
 	$scope.loginGoogle = () => {
 		console.log("google Login Click");
 		userFactory.authWithGoogle()
 		.then((result) => {
 			let user = result.user.uid;
 			$location.path("/home");
 			$scope.apply();
 		})
 		.catch((error) => {
 			console.log("goog login error");
 			let errorCode = error.code;
 			let errorMessage = error.message;
 			console.log("errors");
 		});
 	};
 });