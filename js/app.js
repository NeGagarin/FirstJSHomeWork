//1
let firstName = "Antony";
let lastName = "Stark";
let fullName = firstName + " " + lastName;
console.log(fullName);

// 2
let length = 20;
let height = 27;
let rectangleArea = length * height;
console.log(`The area of ​​a rectangle = ${rectangleArea}sm!`)

// 3
console.log(10**6);

// 4
console.log("The random number is: " + Math.floor(Math.random() * 50));

// 5
let number = "3";
if(number < 0){
    console.log("negative value")
} else if(number > 0) {
    console.log("positive value")
} else if (number === 0) {
    console.log("This is null")
} else {
    console.log("Thit isn`t a number")
}

// 6
let text = "synchrophasotron";
if(text.length > 1) {
    console.log(text.slice(text.length-2, text.length-1))
}

// 7
let month;
switch(month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;  
    case 6:
        console.log("June");
        break; 
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("Oktober");
        break;
    case 11:
        console.log("November");
        break;  
    case 12:
        console.log("December");
        break;
    default:
        console.log("There are only 12 month in a Year!!!")
}

// 8
let password = "Lyn3x1709";
if(password.length > 5 && password.indexOf("&") >= 0) {
    console.log("This password is strong");
} else {
    console.log("this password is weak");
}

// 9
let a = 23;
let b = 17;
if(typeof a == "number" && typeof b == "number") {
    console.log(a+b);
} else {
    console.log("Sum of those items can’t be counted");
}

// 10
let textOne = "1234";
let textTwo = "123";
if(typeof textOne == "string" && typeof textTwo == "string" && textOne.length == textTwo.length) {
    console.log("those items are strings and they’re equal");
} else {
    console.log("items are not compareble");
}