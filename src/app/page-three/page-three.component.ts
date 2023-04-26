import { Component } from '@angular/core';

@Component({
  selector: 'app-page-three',
  template: `
    <h1>
      does this really work?...
    </h1>
    <h2 *ngIf="testButton" >
      <p>maybe.</p>
    </h2>
    <button (click)="onClick()">
      open If statement
    </button>

    <h1>{{testArray}}</h1>
    <button (click)="otherClick()">
      filterArray
    </button>
    <button (click)="resetParams([1,2,3,4])">
      resetParams
    </button>
  `,
  styles: [
    `h1 {
      color: red;
      background-color: black;
    }

    h2 {
      color: crimson;
    }
    `,
  ]
})
export class PageThreeComponent {

  testButton: boolean = false;

  testArray: number[] = [1,2,3,4] 
  
  onClick(): void {
    this.testButton = !this.testButton;
  }

  otherClick(): void {
    this.testArray = this.testArray.filter(elem => elem !== 3);
  }

  resetParams(input: number[]): void {
    this.testArray = input;
  }
}
