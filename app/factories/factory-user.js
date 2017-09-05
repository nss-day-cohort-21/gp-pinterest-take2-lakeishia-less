"use strict";


/*
    Gets the data of what user is currently logged in. 
 */

app.factory('PinApp', function($q, $http){

	let currentUser = null;

	const userLoggedIn = function(){
		console.log('PinApp: userLoggedIn');
		return new Promise((resolve, reject) =>{
			firebase.auth().onAuthStateChanged((user) =>{
				if(user){
					currentUser = user.uid;
					console.log("user", user.uid);
					resolve(true);
				}else{
					resolve(false);
				}
			});
		});
	};

	const getCurrentUser = function(){
		return currentUser;
	};

	const logOut = function(){
		console.log("logOutUser");
		return firebase.auth().signOut();
	};

	let googleAuth = new firebase.auth.GoogleAuthProvider();

	let authWithGoogle = function(){
		return firebase.auth().signInWithPopup(googleAuth);
	};
	return {userLoggedIn, getCurrentUser, logOut, authWithGoogle};
});

