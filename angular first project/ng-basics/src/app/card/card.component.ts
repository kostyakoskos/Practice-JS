import { Component, OnInit } from '@angular/core'

// Так тоже можно прописывать в @Component. Но так все в 1 файле, не удобно.
// template: `
// <div class="card">
//     <h2>Card component</h2>
//     <p>Morning is the best time to work</p>
// </div>
// `,
// styles: [
//     `
//     .card {
//         padding: .5rem 1rem;
//         border: 1px dashed #ccc;
//         margin-bottom: .1rem;
//     }
//     h2{
//         margin-bottom: .5rem;
//     }
//     `
// ]

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    interpolation: ['{{','}}']
})

export class CardComponent implements OnInit { 
    title = 'My card Title';

    text: string     = 'My sample text';

    number = 42;

    array = [1, 1, 2, 3, 5, 8, 13];

    obj = {name: 'Kostya', age: 21};

    imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';

    disabled = false;

    textColor = 'blue';

    changeTitle() {
        this.title = 'Title has been changed';
    }

    ngOnInit() {
        setTimeout (() =>
        this.imgUrl = 'https://tproger.ru/s3/uploads/2021/02/iconfinder_reactjs_javascript_library_atom_atomic_react_5362908-cover.png', 
        3000)
        setTimeout (() =>
        this.disabled = true,
        4000)
    }

    getInfo() {
        return 'This is my info';
    }

    inputHandler(event: any) {
        const val = event.target.value;
        this.title = val;
    }

    inputHandler2(value2: string) {
        this.title = value2;
    }

    changeHandler() {
        console.log(this.title);
    }
}