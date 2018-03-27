import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sugestao',
  templateUrl: './sugestao.component.html',
  styleUrls: ['./sugestao.component.css']
})
export class SugestaoComponent implements OnInit {

  public sugestoes: Sugestao[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Sugestao[]>(baseUrl + 'api/Sugestao/GetSugestoes').subscribe(result => {
      this.sugestoes = result;
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}

interface Sugestao {
  Id: number;
  titulo: string;
  descricao: string;
  contLike: number;
  contUnLike: number
}