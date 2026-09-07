let number = 121;
let originalNum = number;
let reversenumber = 0;

while(number > 0){
    reversenumber = reversenumber * 10 + number % 10;
     number = Math.floor(number / 10);
}

if(originalNum === reversenumber){
    console.log("Palindrome")
}