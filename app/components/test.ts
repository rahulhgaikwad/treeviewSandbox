import {Component} from 'angular2/core';

    @Component({
    selector: 'test',
    template: `
    <div>
        <ul>
            <li *ngFor="#data of dataSet" (click)="highlight(data)" [ngClass]="{highlight: data.isHighlighted}">{{data.name}}</li>
        </ul>
    </div>
    `, 
        styles: [`
        .highlight {
            background-color: yellow;
        }
        `]
})

export class Test{
    highlight(data){
        data.isHighlighted = !data.isHighlighted;
    }
        dataSet = [
        {name: 'one', isHighlighted: false},
        {name: 'two', isHighlighted: false},
        {name: 'three', isHighlighted: false}];
}