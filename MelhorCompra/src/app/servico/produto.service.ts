import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  private url:string = ""

  constructor(private http:HttpClient) { }

  //Metodo para cadastrar produto na lista
  cadastrarProduto(obj:Produto):Observable<Produto> {
    return this.http.post<Produto>(this.url, obj);
  }
}
