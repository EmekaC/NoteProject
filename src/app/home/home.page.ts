import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
notes = [
  {
    id: '1',
    date: '2018-03-09', //yyyy-mm-dd
    title: 'Ionic 5',
    content: 'Seting up Ionic notes project.'
  },
  {
    id: '2',
    date: '2017-01-02',
    title: 'Angular',
    content: 'Learning Routing in Angular'
  },
  {
    id: '3',
    date: '2019-11-07',
    title: 'Firebase',
    content: 'This will be used to build the backend and storage.'
  }
]

}


