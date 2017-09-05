"use strict";

app.factory("todoFactory", function($q, $http, FBCreds){

    const getAllPins = function(user){
        let pins = [];
        console.log("url is", `${FBCreds.databaseURL}/pins.json`);
        return $q( (resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/pins.json`)
            .then((itemObject) => {
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
});