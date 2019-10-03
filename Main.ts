'use strict';


const fs = require('fs');


const args: string[] = process.argv; //for using command line arguments. Don't forget that it is a string array w/ atleast 2 elements already!!!

let mainProcess = () => {
    if (args.length == 2) {
        fs.readFileSync('list.txt', 'utf-8');
    } else if (args[2] == '-l'){
        
    } else if (args[2] == '-a'){

    } else if (args[2] == '-r'){

    } else if (args[2] == '-c'){

    }
}
mainProcess();
console.log(args)



















// } else if (args[2] == 'list') {
    //     console.log('i am listing all the todos');
    //     // console.log('i am listing all the todos')
    // } else {
    //     console.log('this is the error handling');