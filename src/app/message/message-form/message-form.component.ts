import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Message } from 'src/app/shared/message.model';
import { MessageService } from 'src/app/shared/message.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styles: [
  ]
})
export class MessageFormComponent implements OnInit {

  constructor(public service : MessageService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    this.service.postMessage().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Message created successfully')
      },
      err =>{
        this.toastr.error('Error creating this message')
      }
    );
  }

  resetForm(form : NgForm){
    form.form.reset();
    this.service.formData = new Message();
  }
}
