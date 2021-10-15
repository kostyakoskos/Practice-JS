class TypeScript {
    version: string;

    constructor(version:string){
        this.version = version;
    }

    info(name:string){
        return `[${name}]: Typescript version is ${this.version}`
    }
}

class Car{
    readonly model: string;
    readonly numberOfWheels: number = 4;

    constructor(theModel: string){
        this.model = theModel;
    }
}

class Car2{    
    readonly numberOfWheels: number = 4;
    // Т.к. поле readonly, значение его можно менять только в конструкторе. Этот пример <=> class Car
    constructor(readonly model: string) {}
}

class Animal{
    protected voice:string = "";
    private go() {
        console.log('Go');
    }
}
class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = 'voice';
    }
}

const cat = new Cat();

abstract class Component {
    abstract render(): void;
    abstract info(): string;
}

class AppComponent extends Component{
    render(): void {
        console.log('Render');
    }
    info(): string {
        return 'info string'; 
    }
}

const arrayOfNumbers: Array<number> = [1,1,2,3,5,8,13];
const arrayOfStrings: Array<string> = ['Hello', 'world'];
function reverse<T>(array: T[]): T[] {
    return array.reverse();
}
reverse(arrayOfNumbers);
reverse(arrayOfStrings);