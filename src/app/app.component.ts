import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Loader Image in Material Angular using Interceptor';
  userEmails;
  constructor( private http: HttpClient){}
  callApi() {
       this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe( data => { setTimeout(()=> this.userEmails = data, 1000)})
          
  }

  cleanApi(){
    this.userEmails = []
  }
}
