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
    return  (year % 4 === 0 && year % 100 !== 0);
}
console.log(leapYear(2026));
console.log(leapYear(2016));
console.log(leapYear(1971));