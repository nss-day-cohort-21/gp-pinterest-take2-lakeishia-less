"use strict";

const app = angular.module("PinApp", ["ngRoute"]);

//1. Need to create user authentication.
let isAuth = (userFactory) => new Promise ( (resolve, reject) => {
  console.log("userFactory is", userFactory);
  userFactory.userLoggedIn()
  .then( (userExists) => {
    if(userExists){
      console.log("Authenticated, go ahead");
      resolve();
    }else {
      console.log("Authentication reject, GO AWAY");
      reject();
    }
  });
});


//2. Create a routeProvider for all partials
app.config(($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html',
		controller: 'homeCtrl'
	})
	.otherwise('/');
});



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