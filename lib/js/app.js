'use strict';

var elementIdNames = ['serviceOne', 'serviceTwo', 'serviceThree', 'serviceFour', 'serviceFive'];
// functions that reads data from jsonplaceholder rest api & returns data as json
function getData() {
    return fetch('https://jsonplaceholder.typicode.com/todos').then(function (response) {
        return response.json();
    }).then(function (data) {
        return data;
    });
}

getData().then(function (data) {
    var slicedArray = data.slice(0, 5); // get first 5 elements of the array
    for (var index = 0; index < slicedArray.length; index++) {
        var element = document.getElementById(elementIdNames[index]);
        element.innerHTML = slicedArray[index].title;
    }
});