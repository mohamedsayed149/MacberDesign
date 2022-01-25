import { Injectable } from '@angular/core';
import { Message } from './message.model';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http : HttpClient) { }

  readonly baseUrl = "https://localhost:44323/api/messages";
  formData:Message = new Message();
  list : Message[];
  postMessage(){
   return this.http.post(this.baseUrl+'/create',this.formData);
  }

  refreshList(){
    this.http.get(this.baseUrl)
    .toPromise()
    .then(res => this.list = res as Message[]);
  }
}
