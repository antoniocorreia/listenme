import { Component, OnInit, Inject } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-novo-sugestao',
  templateUrl: './novo-sugestao.component.html',
  styleUrls: ['./novo-sugestao.component.css']
})

export class NovoSugestaoComponent implements OnInit {

  public sugestao: Sugestao={
    Id: 0,
    titulo: "",
    descricao: "",
    contLike: 0,
    contUnLike: 0
  }
  //private http: HttpClient
  private baseUrl: string

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: Router) { 
    this.baseUrl=baseUrl
  }

  ngOnInit() {
  }

  setValue(): void {
    this.http.post<Sugestao[]>(this.baseUrl + 'api/Sugestao/Create', this.sugestao)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/']);
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