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
  private urlMenorPrecoCondor:string = "https://api.c9t6aobb6f-condorsup1-p1-public.model-t.cc.commerce.ondemand.com/occ/v2/condor/search?fields=products(code%2Cname%2Cdescription%2Csummary%2Cconfigurable%2CconfiguratorType%2Cmultidimensional%2Cprice(FULL)%2Cimages(DEFAULT)%2Cstock(FULL)%2CaverageRating%2CvariantOptions%2CsellingUnit(FULL)%2CquantityInterval%2CmaxOrderQuantity%2CmktCategoryScenario%2CpromotionalPrice(FULL)%2CpromotionPercentage%2Ccategories(FULL)%2Cmanufacturer%2CpromotionDescription)%2Cfacets%2Cbreadcrumbs%2Cpagination(DEFAULT)%2Csorts(DEFAULT)%2CfreeTextSearch%2CcurrentQuery%2CreadyList&query=arroz%205kg&pageSize=12&lang=pt&curr=BRL"

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
    this.distanciaProduto = distancia
    this.nomeProduto = produto.nome
    this.nomeProduto.replace(" ", "%20")

    alert(`this.distancia : ${this.distanciaProduto}`)

  /*
    this.produtoData = this.http.
                      get<ProdutoData>(`${this.urlMenorPreco}${this.nomeProduto}&categoria=${produto.categoria}&offset=100&raio=${this.distanciaProduto}&data=0&ordem=0`)
                      */

    this.produtoData = this.http.
                      get<ProdutoData>(`${this.urlMenorPrecoCondor}`)

    return this.produtoData
    
  }
}
