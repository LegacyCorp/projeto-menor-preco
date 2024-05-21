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

  private nomeProduto: string = ""
  private distanciaProduto: number = 2
  private produtoData:ProdutoData | any

  constructor(private http:HttpClient) { }

  cadastrarProduto(obj:Produto):Observable<Produto> {
    return this.http.post<Produto>(this.url, obj)
  }

  procurarMelhorPreco(produto:Produto, distancia: number):Observable<ProdutoData> {

    //Verifica se o array esta vazio
    /*
    if(produtos.length === 0) {
      console.log("Nenhum produto fornecido.")
      return "Nenhum produto fornecido."
    }
    */
    this.nomeProduto = produto.nome
    this.nomeProduto.replace(" ", "%20")

    this.produtoData = this.http.
                      get<ProdutoData>(`${this.urlMenorPreco}${this.nomeProduto}&categoria=${produto.categoria}&offset=0&raio=${distancia}&data=-1&ordem=0`)

    return this.produtoData
    
  }
}
