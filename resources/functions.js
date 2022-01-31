import {valuesDecimal, valuesNumber, valuesTen, valuesTenConjugation} from './../resources/valueSchema.js'

export  function getDollarsString (integerNumber){
    let numberString="";
    let isTenConjuntion = false;
    integerNumber.map((value, index)=>{
   

        let firstValue = valuesDecimal[value];
        let secondValue = valuesNumber[(integerNumber.length - 1) - index];

        if(isTenConjuntion){
            let value = (firstValue == "zero") ? 'ten' : valuesTenConjugation[firstValue];
            numberString += `${value} ${secondValue!="units"? secondValue : ""} `
            isTenConjuntion = false;
            return;
        }

        if(firstValue == "zero"){
            return;
        }

        if(secondValue == 'tens' || secondValue == 'tens-thousand'){
            if(firstValue == 'one'){
                isTenConjuntion = true;
                return
            }
            numberString += `${valuesTen[firstValue]} `
            return;
        }

      

        numberString += `${firstValue} ${secondValue == "units" ? "" : secondValue} `;
        
    })
    return numberString;
}

export function getCentString (myArr, numberStringComplete = numberString){
    let isFormated = true;

    if(myArr[1]){
        var centsNumber = Number(myArr[1])
        if(myArr[1].length==1){
            isFormated = false;
        }else{
            if(centsNumber<10){
                numberStringComplete += `0${centsNumber}/100 dollars`
            }else{
                numberStringComplete += `${centsNumber}/100 dollars`
            }
        }
    }else{
        numberStringComplete += `0/100 dollars`
    }

    return {isFormated, numberStringComplete, centsNumber}
}

