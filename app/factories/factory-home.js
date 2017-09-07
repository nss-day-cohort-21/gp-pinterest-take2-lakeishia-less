"use strict";
//This is the main factory that targets the firebaseURL and pulls down the data stored there. 
app.factory("pinFactory", function($q, $http, FBCreds){
//getAllPins pulls every pin into the array based on the user (note the URL). It sorts the data by keys and pushes the sorted data into the array. 
	const getAllPins = function(user){
		let pins = [];
		console.log("url is", `${FBCreds.databaseURL}/pins.json?orderBy="uid"&equalTo="${user}"`);
		return $q((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/pins.json?orderBy="uid"&equalTo="${user}"`)
			.then((itemObject)=>{
				let itemCollection = itemObject.data;
				console.log("itemCollection", itemCollection);
				Object.keys(itemCollection).forEach((key) => {
					itemCollection[key].id = key;
					pins.push(itemCollection[key]);
				});
				resolve(pins);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};
//pushes the object stored in addNewPin up to firebase.
	const addPin = function(obj){
		let newObj = JSON.stringify(obj);
		return $http.post(`${FBCreds.databaseURL}/pins.json`, newObj)
		.then ((data) => {
			console.log("data", data);
			return data;
		}, (error) => {
			let errorCode = error.code;
			let errorMessage = error.message;
			console.log("error", errorCode, errorMessage);
		});
	};

//removes the pin object from firebase based on the id. 
	const deletePin = function(id){
		return $q((resolve, reject) => {
			$http.delete(`${FBCreds.databaseURL}/pins/${id}.json`)
			.then((response) => {
				resolve(response);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	return {getAllPins, addPin, deletePin};
});