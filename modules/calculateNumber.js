import { getDollarsString, getCentString } from '../resources/functions.js';

export default function calculateNumber(number){

    let myArr = String(number).split('.')
    //divide the dollars from the cents
    var integerNumber = myArr[0].split("").map((num)=>{
        return Number(num);
    })
    // Get the string complete of dollars
    let numberStringDollars = getDollarsString(integerNumber);

    // Get the string complete of cents and concatene
    let {numberStringComplete, isFormated, centsNumber} = getCentString(myArr, numberStringDollars)
    
    // Return of the final value 
    return (isFormated) ? numberStringComplete.replace(/^\w/, (c) => c.toUpperCase()): `Cents have to be format .${centsNumber}0`;
    
}