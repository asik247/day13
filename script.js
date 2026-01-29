/* 1 foot = 12 inc
 \(0.0833\)
code start here: inc to fit:-

*/
const foot=(feet)=>{
    return feet * 12;
}
console.log(foot(5.7));




const inch = (foot)=>{
    // return foot*0.0833
    return foot / 12

}
console.log(inch(68.4));