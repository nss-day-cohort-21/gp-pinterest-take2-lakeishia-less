"use strict";

app.factory("pinFactory", function($q, $http, FBCreds){
	
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