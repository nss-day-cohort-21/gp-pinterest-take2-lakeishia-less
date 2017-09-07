"use strict";
console.log("app.js");

const app = angular.module("PinApp", ["ngRoute"]);

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

app.config(($routeProvider) =>{
	$routeProvider
		.when('/', {
			templateUrl: 'partials/pinList.html',
			controller: 'pinListCtrl',
			resolve: {isAuth}
		})
		.when('/login', {
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

app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.apiKey,
		authDomain: creds.authDomain,
		databaseURL: creds.databaseURL
	};
	firebase.initializeApp(authConfig);
});