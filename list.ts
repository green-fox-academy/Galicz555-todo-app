export class list{
    public list: string[]

	constructor(list: string[] = ['Walk the dog', 'Buy milk', 'Do homework']) {
        this.list = list;
    }
    
    public listCounter() {
        for (let i = 0; i < this.list.length; i++) {
            console.log((i + 1) + " - " + this.list[i]);
        }
    }
}