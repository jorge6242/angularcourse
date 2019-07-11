import { Component } from '@angular/core';

interface Passengers {
  id: number,
  fullname : string,
  checkedIn : boolean,
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: string;
  value1 : number = 1;
  value2 : number = 2;
  logo: string = 'img/logo.png'
  isHappy : boolean = true;
  inputValue: string ="";

  passengers: Passengers[] = [
    {
      id : 1,
      fullname: 'name 1',
      checkedIn: true
    },
    {
      id : 2,
      fullname: 'name 2',
      checkedIn: false,
    },
    {
      id : 3,
      fullname: 'name 3',
      checkedIn: false,
    },
  ];

  constructor() {
    this.title = 'Angular Ultimate';
  }


  handleChange(value){
    console.log('value ', value);
    this.inputValue = value;
  }

  handleClick(value: string) {
    console.log('value ', value);
  }
}
