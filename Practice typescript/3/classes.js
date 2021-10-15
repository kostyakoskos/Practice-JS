// class TypeScript {
//     version: string;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     constructor(version:string){
//         this.version = version;
//     }
//     info(name:string){
//         return `[${name}]: Typescript version is ${this.version}`
//     }
// }
// class Car{
//     readonly model: string;
//     readonly numberOfWheels: number = 4;
//     constructor(theModel: string){
//         this.model = theModel;
//     }
// }
// class Car2{    
//     readonly numberOfWheels: number = 4;
//     // Т.к. поле readonly, значение его можно менять только в конструкторе. Этот пример <=> class Car
//     constructor(readonly model: string) {}
// }
// class Animal{
//     protected voice:string = "";
//     private go() {
//         console.log('Go');
//     }
// }
// class Cat extends Animal {
//     public setVoice(voice: string): void {
//         this.voice = 'voice';
//     }
// }
// const cat = new Cat();
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log('Render');
    };
    AppComponent.prototype.info = function () {
        return 'info string';
    };
    return AppComponent;
}(Component));
