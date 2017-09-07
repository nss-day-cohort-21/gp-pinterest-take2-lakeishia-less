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
		console.log("waht is the pin ID", `${FBCreds.databaseURL}/pins/${id}.json`);
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

	const getSinglePin = function(itemId){
        return $q((resolve, reject) =>{
            $http.get(`${FBCreds.databaseURL}/pins/${itemId}.json`)
            .then((itemObj) => {
                resolve(itemObj.data);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

    const getSingleBoard = function(itemId){
        return $q((resolve, reject) =>{
            $http.get(`${FBCreds.databaseURL}/boards/${itemId}.json`)
            .then((itemObj) => {
                resolve(itemObj.data);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

     const editPin = function(id, obj) {
        console.log("id and obj to update", id, obj);
        return $q((resolve, reject) => {
            let newObj = JSON.stringify(obj);
            $http.patch(`${FBCreds.databaseURL}/pins/${id}.json`, newObj)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };
    const editBoard = function(id, obj) {
        console.log("id and obj to update", id, obj);
        return $q((resolve, reject) => {
            let newObj = JSON.stringify(obj);
            $http.patch(`${FBCreds.databaseURL}/boards/${id}.json`, newObj)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

	return {getAllPins, addPin, deletePin, getSinglePin, editPin, editBoard, getSingleBoard};
});