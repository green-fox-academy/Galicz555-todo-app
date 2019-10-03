'use strict';
import { list } from '../Galicz555-todo-app/list'


const fs = require('fs');


const args: string[] = process.argv; //for using command line arguments. Don't forget that it is a string array w/ atleast 2 elements already!!!

let mainProcess = () => {
    if (args.length == 2) {
        let help = fs.readFileSync('help.txt', 'utf-8');
        console.log(help);
    } else if (args[2] == '-l') {
        let newList = new list();
        newList.listCounter();
    } else if (args[2] == '-a') {
        fs.writeFileSync('list.txt', 'utf-8', 'something')
    } else if (args[2] == '-r') {

    } else if (args[2] == '-c') {

    }
}
mainProcess();


















// } else if (args[2] == 'list') {
    //     console.log('i am listing all the todos');
    //     // console.log('i am listing all the todos')
    // } else {
    //     console.log('this is the error handling');