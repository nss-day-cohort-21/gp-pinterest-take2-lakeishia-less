"use strict";


/*
    Gets the data of what user is currently logged in. 
 */

app.factory('userFactory', function($q, $http){

	let currentUser = null;

	const isAuthenticated = function(){
		console.log('PinApp: isAuthenticated');
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

	let provider = new firebase.auth.GoogleAuthProvider();

	let authWithGoogle = function(){
		return firebase.auth().signInWithPopup(provider);
	};
	return {isAuthenticated, getCurrentUser, logOut, authWithGoogle};
});

