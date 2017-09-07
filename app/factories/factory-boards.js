"use strict";

app.factory("boardFactory", function($q, $http, FBCreds){
	
	const getAllBoards = function(user){
		let boards = [];
		console.log("url is", `${FBCreds.databaseURL}/boards.json?orderBy="uid"&equalTo="${user}"`);
		return $q((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/boards.json?orderBy="uid"&equalTo="${user}"`)
			.then((itemObject)=>{
				let itemCollection = itemObject.data;
				console.log("itemCollection", itemCollection);
				Object.keys(itemCollection).forEach((key) => {
					itemCollection[key].id = key;
					boards.push(itemCollection[key]);
				});
				resolve(boards);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	const addBoard = function(obj){
		let newObj = JSON.stringify(obj);
		return $http.post(`${FBCreds.databaseURL}/boards.json`, newObj)
		.then ((data) => {
			console.log("data", data);
			return data;
		}, (error) => {
			let errorCode = error.code;
			let errorMessage = error.message;
			console.log("error", errorCode, errorMessage);
		});
	};

	const deleteBoard = function(id){
		return $q((resolve, reject) => {
			$http.delete(`${FBCreds.databaseURL}/boards/${id}.json`)
			.then((response) => {
				resolve(response);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	return {getAllBoards, addBoard, deleteBoard};
});