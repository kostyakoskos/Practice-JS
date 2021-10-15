const str: string = 'qwe';

const isFetching: boolean = true;
const isLoading: boolean = true;

let int: number = 42;

const mes: string = 'Hello typeScript';

const numberArray: Number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<Number> = [1, 1, 2, 3, 5, 8, 13];

const arr: [string, number] = ['Kostya', 123123];

let variable: any = 42;

variable = 'New string';

function sayMayName(name: string): void{
    console.log(name);
}
sayMayName('Haizenberg');
console.log(str);

function throwError(message:string): never{
        throw new Error(message);
}

function infinite() : never{
    while(true){}
}

type Login = string;

type ID = string | number;
const id1: ID = '123';
const id2: ID = 123;

type someType = string | null | undefined;