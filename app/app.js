"use strict";
console.log("app.js");

//Sets up the use of angular with PinApp, ngRoute sets up what is viewable in the ng-view portion of the index.

const app = angular.module("PinApp", ["ngRoute"]);

//This checks to see if the user is logged in, isAuth sets a true of false variable that will be used to check if the route is okay. 

let isAuth = (userFactory) => new Promise ((resolve, reject) => {
	console.log("This is the userFactory", userFactory);
	userFactory.isAuthenticated()
	.then((userExists) => {
		if(userExists) {
			console.log("Authentication Good");
			resolve();
		}else {
			console.log("Authentication Bad");
			reject();
		}
	});
});

//This sets up what is viewable in ng-view, the resolve {isAuth} checks to see if isAuth is true (user logged in) so you can access that view on the main html page and the controller allows that html partial to use one of the controllers. The button when clicked calls the href that sends the hyperlink to that link (ex. Add pin button sends you to '/pin/addNewPin').

app.config(($routeProvider) =>{
	$routeProvider
		// .when('/', {
		// 	templateUrl: 'partials/pinList.html',
		// 	controller: 'pinListCtrl',
		// 	resolve: {isAuth}
		// })
		.when('/', {
			templateUrl: 'partials/user.html',
			controller: 'userCtrl'
		})
		.when('/pin/addNewPin', {
			templateUrl: 'partials/newPinForm.html',
			controller: 'addNewPinCtrl',
			resolve: {isAuth}
		})

		.when('/boards/addNewBoard', {
			templateUrl: 'partials/newBoardForm.html',
			controller: 'addNewBoardCtrl',
			resolve: {isAuth}
		})
		.when('/home',{
			templateUrl: 'partials/pinList.html',
			controller: 'pinListCtrl',
			resolve: {isAuth}
		})
		.when('/boardList',{
			templateUrl: 'partials/boardList.html',
			controller: 'boardListCtrl',
			resolve: {isAuth}
		})
		.when('/pinList',{
			templateUrl: 'partials/pinList.html',
			controller: 'pinListCtrl',
			resolve: {isAuth}
		})
		.otherwise('/');
});
//separates your firebase credentials and calls it. 
app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.apiKey,
		authDomain: creds.authDomain,
		databaseURL: creds.databaseURL
	};
	firebase.initializeApp(authConfig);
});