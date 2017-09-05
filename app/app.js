"use strict";

const app = angular.module("PinApp", ["ngRoute"]);

//1. Need to create user authentication.



//2. Create a routeProvider for all partials



//pulls in firebase data for app to use. 
app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.apiKey,
		authDomain: creds.authDomain,
		databaseURL: creds.databaseURL
	};

	firebase.initializeApp(authConfig);
});