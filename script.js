/* 1 foot = 12 inc
 0.0833
code start here: inc to fit:-

*/
const inchShow = (feet) => {
    return feet * 12;
}
const inch = inchShow(5.7);
console.log('inch:', inch);
// inch to feet conveart:
const feetShow = (inch) => {
    return inch / 12
}
const feet = feetShow(68.4)
console.log('feet:', feet);
/* Output:
inch:68.4
feet:5.7
*/
/*
Year Leyper
rules:1-divisible by 400 or
2-divisible by 4 and not divisable by 100
*/
function leapYear (year){
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}
console.log(leapYear(2026));
console.log(leapYear(2016));
console.log(leapYear(1971));
// sum of odd of an array
function oddNumbers(numbers){
    let oddNumber =[];
    let sum = 0;
    for (let num of numbers){
        if(num %2!==0){
            oddNumber.push(num)
            sum +=num
        }
    }
    return sum
   
}
const array = [1,3,20,5,11]
console.log(oddNumbers(array));
// array remove in dublicate value:
let myArray = [2,2,2,34,3456,67];
let newArray = [...new Set(myArray)]
console.log(newArray);
let numArray = [1,2,3,333,3,4,2,2,20]
let numNew = [...new Set(newArray)];
console.log(numNew);

// Math Method code start here:
const ran = Math.round(Math.random()*5);
console.log(ran);
// Dic Game code here
let dice = Math.floor(Math.random()*6+1);
console.log('Dice:',dice);
// Array thake random item :
let firendSName = ['asik','rimon','khan','jamal'];
let friendRandom = Math.floor(Math.random()*firendSName.length)
console.log(firendSName[friendRandom]);


// let randomAccess = Math.floor(Math.random()*firendSName.length)
// console.log(firendSName[randomAccess]);

// Date and Time
let now = new Date();
console.log(now.getDay());

// Different 
let start = new Date("2026-01-01")
let end = new Date("2026-01-30")
let diff = end - start;
let days = diff /(1000*60*60*24)
console.log(days);