'use strict';


const fs = require('fs');


const args: string[] = process.argv; //for using command line arguments. Don't forget that it is a string array w/ atleast 2 elements already!!!

let mainProcess = () => {

    if (args.length == 2) {
        console.log('this is without arguments, help');
    } else if (args[2] == 'list') {
        fs.readFileSync('list.txt', 'utf-8');
        console.log('i am listing all the todos');
        // console.log('i am listing all the todos')
    } else {
        console.log('this is the error handling');
    }
}
mainProcess();