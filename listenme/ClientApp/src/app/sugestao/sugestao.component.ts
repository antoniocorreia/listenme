import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sugestao',
  templateUrl: './sugestao.component.html',
  styleUrls: ['./sugestao.component.css']
})


export class SugestaoComponent implements OnInit {

  public sugestoes: Sugestao[];
  private baseUrl: string
  private http: HttpClient;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl=baseUrl
    this.http=http

    http.get<Sugestao[]>(baseUrl + 'api/Sugestao/GetSugestoes').subscribe(result => {
      this.sugestoes = result;
    }, error => console.error(error));
  }

  ngOnInit() {
  }

  like(Id: Int32Array){
    this.http.post(this.baseUrl + 'api/Sugestao/Like?Id='+Id,null)
      .subscribe(
        res => {
          console.log(res);
          window.location.reload();
        },
        err => {
          console.log("Error occured");
        }
      );

  }

  unLike(Id: Int32Array){
    this.http.post(this.baseUrl + 'api/Sugestao/UnLike?Id='+Id,null)
      .subscribe(
        res => {
          console.log(res);
          window.location.reload();
        },
        err => {
          console.log("Error occured");
        }
      );
  }

}

interface Sugestao {
  Id: number;
  titulo: string;
  descricao: string;
  contLike: number;
  contUnLike: number
}