let elementIdNames = ['serviceOne', 'serviceTwo', 'serviceThree','serviceFour', 'serviceFive'];
// functions that reads data from jsonplaceholder rest api & returns data as json
function getData(){
   return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {return data})
}

getData().then(data => {
   let slicedArray =  data.slice(0, 5); // get first 5 elements of the array
    for (let index = 0; index < slicedArray.length; index++) {
        let element = document.getElementById(elementIdNames[index]);
        element.innerHTML = slicedArray[index].title;
    }
});