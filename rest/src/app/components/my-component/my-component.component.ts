import { Quote } from './../../model/Quote.model';
import { KanyeRestService } from './../../service/kanye-rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  mensagem!:Quote;

  constructor(private quoteService:KanyeRestService) {

    quoteService.execute().subscribe((response)=>{
      console.log(response);
      this.mensagem = response;
    })
  }

  ngOnInit(): void {
  }

}
