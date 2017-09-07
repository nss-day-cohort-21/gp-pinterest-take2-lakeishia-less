"use strict";

//provides the functionality for the navbar partial. Checks if the user is logged in with a true or false. This navbar partial uses this to provide what to show. 

app.controller('navCtrl', function($scope, $window, userFactory){

	$scope.isLoggedIn = false;

	$scope.logout = () => {
		userFactory.logOut();
	};
	firebase.auth().onAuthStateChanged(function(user) {
		if(user) {
			$scope.isLoggedIn = true;
			console.log("CurrenUser loggerd in", user);
			console.log("logged into firebase", $scope.isLoggedIn);
			$scope.$apply();
		}else{
			$scope.isLoggedIn = false;
			console.log("This user is not logged", $scope.isLoggedIn);
		}
	});
});