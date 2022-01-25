import { Component, OnInit } from '@angular/core';
import { MessageService } from '../shared/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styles: [
  ]
})
export class MessageComponent implements OnInit {

  constructor(public service : MessageService) { }

  ngOnInit(): void {


    console.log(this.service.refreshList())
  }

}
