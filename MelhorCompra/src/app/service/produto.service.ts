import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/Produto';
import { Observable } from 'rxjs';
import { ProdutoData } from '../models/ProdutoData';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url:string = ""
  private urlMenorPreco:string = "https://menorpreco.notaparana.pr.gov.br/api/v1/produtos?local=6gkzqf9vb&termo=" //+ produto
  //+ "&categoria=55&offset=0&raio=2&data=-1&ordem=0"

  private produtoData:ProdutoData | any

  constructor(private http:HttpClient) { }

  cadastrarProduto(obj:Produto):Observable<Produto> {
    return this.http.post<Produto>(this.url, obj)
  }

  /*
  procurarMelhorPreco(produtos:Produto[]):Observable<void> {
    produtos.forEach(element => {
      console.log("- " + element.nome)
    });

    return;
  }
  */

  procurarMelhorPreco(produtos:Produto[]):Observable<ProdutoData> {

    //Verifica se o array esta vazio
    /*
    if(produtos.length === 0) {
      console.log("Nenhum produto fornecido.")
      return "Nenhum produto fornecido."
    }
    */

    console.log("LISTA DE COMPRAS")
    produtos.forEach(element => {
      console.log("- " + element.nome)
    });

    this.produtoData = this.http.
                      get<ProdutoData>(`${this.urlMenorPreco}cocacola&categoria=55&offset=0&raio=2&data=-1&ordem=0`)

    return this.produtoData
    
    /*    
    let temp = this.http.get(`${this.urlMenorPreco}cocacola&categoria=55&offset=0&raio=2&data=-1&ordem=0`)
    console.log(`${this.urlMenorPreco}cocacola&categoria=55&offset=0&raio=2&data=-1&ordem=0`)
    console.log("temp= " + temp)
    console.log(temp)
    */

  }
}
