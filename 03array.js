
//remove Dublicate from an array
let arrayDublicate = [1,2,3,3,3,3,4,5];
let arrayunique = [];

for(let i = 0; i < arrayDublicate.length; i++){
    if(!arrayunique.includes(arrayDublicate[i])){
        arrayunique.push(arrayDublicate[i]);
    }
}
console.log("Unique Array ; ", arrayunique)



//Find the max
let arrayMax = [30,20,40,10,60,50];
let max = arrayMax[1];

for(let i = 0; i < arrayMax.length; i++){
    if(max < arrayMax[i]){
        max = arrayMax[i];
    }
}
console.log(max);

//Reverse Array
let myArray = [1,2,3,4,5];
let newArray = [];
let count = myArray.length - 1;

for(let i = 0; i < myArray.length; i++){
    newArray.push(myArray[count]);
    count --;
}
console.log(newArray);

