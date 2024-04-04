import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/Produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url:string = ""

  constructor(private http:HttpClient) { }

  cadastrarProduto(obj:Produto):Observable<Produto> {
    return this.http.post<Produto>(this.url, obj)
  }
}
