import { read } from "fs";
const fs = require('fs');

export class list {
    public _list: string[]

    constructor(list: string[] = []) {
        this._list = list;
    }

    public isItEmpty():boolean{
        this._list = fs.readFileSync('list.txt', 'utf-8').split("\r\n");
        if(!this._list[0]){
        return true;
        };
    }

    public addTask(task: string) {
        this._list = fs.readFileSync('list.txt', 'utf-8').split("\r\n");
        this._list.push(task);
        let data2 = this._list.join("\r\n");
        fs.writeFileSync('list.txt', data2);
    }

    public listCounter() {
        this._list = fs.readFileSync('list.txt', 'utf-8').split("\r\n");
        for (let i = 0; i < this._list.length; i++) {
            console.log((i + 1) + " - " + this._list[i]);
        }
    }
}
