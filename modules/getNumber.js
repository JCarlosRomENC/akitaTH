export default function getNumber (){

    var number = new Promise(function(resolve, reject) {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
          })
          
        readline.question(`Please, enter your number `, response => {
            readline.close()

            if(isNaN(response) || response == "" || response <1){
                resolve(false)
            }
            resolve(response)
        })
    });

    return number;
}
