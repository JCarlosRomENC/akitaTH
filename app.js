"use strict";
import getNumber from './modules/getNumber'
import calculateNumber from './modules/calculateNumber'
async function index(){

    var number =  await getNumber()

    if(!number){
        console.log('Response not valid');
        return;
    }

    let numberString = calculateNumber(number)
    

    console.log(`Your number is: ${numberString}`)
    
}

index()