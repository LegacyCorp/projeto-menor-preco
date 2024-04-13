import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../models/Produto';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../../service/produto.service';
import { HttpClient } from '@angular/common/http';
import { ProdutoData } from '../../models/ProdutoData';
import { MenorPrecoComponent } from '../menor-preco/menor-preco.component';
import { MenorPrecoDistanciaComponent } from '../menor-preco-distancia/menor-preco-distancia.component';
import { MenorPrecoAppComponent } from '../menor-preco-app/menor-preco-app.component';

@Component({
  selector: 'app-produto-incluir',
  standalone: true,
  imports: [CommonModule, FormsModule, MenorPrecoComponent, MenorPrecoDistanciaComponent, MenorPrecoAppComponent],
  templateUrl: './produto-incluir.component.html',
  styleUrl: './produto-incluir.component.css'
})

export class ProdutoIncluirComponent {

  porcentagem:number = 1.1

  //objeto do tipo produto
  produto = new Produto()

  precoTotalListaMenorPreco:number = 0
  precoTotalListaMenorPrecoConsiderandoDistancia: number = 0
  precoTotalListaMenorPrecoDoApp: number = 0
  
  produtos:Produto[] = []
  listaMenorPreco: Produto[] = []
  listaMenorPrecoComDistancia: Produto[] = []
  listaMenorPrecoDoApp : Produto[] = []

  //Popular objeto quando fizer consulta
  produtoData?:ProdutoData

  constructor(private service:ProdutoService) { }

  cadastrarProduto():void {
    this.produtos.push(this.produto)
    console.log("produtos.length = " + this.produtos.length)
    console.log(`produto.codigo = ${this.produto.codigo}`)

     //Limpar formulário
     this.produto = new Produto()

     //Mensagem
     alert('Produto cadastrado com sucesso!')
  }

  procurarMelhorPreco(produtos:Produto[]) {

    //Limpar lista de compras
    this.listaMenorPreco = []
    this.listaMenorPrecoComDistancia = []
    this.listaMenorPrecoDoApp = []

    produtos.forEach(produto => {
      this.service.procurarMelhorPreco(produto).subscribe(
        {
          next: (res) => {

            console.log(res)
            
            this.produtoData = {
              precos: {
                max:res.precos.max,
                min:res.precos.min
              },
              produtos:res.produtos
            }

            this.obterListaMenorPreco(produto.quantidade)
            this.listaMenorPreco.push(this.produto)

            //Limpar objeto
            this.produto = new Produto()
            
            this.obterListaMenorPrecoDoApp(produto.quantidade)
            this.listaMenorPrecoDoApp.push(this.produto)
            
            //Limpar objeto
            this.produto = new Produto()
            
            this.obterListaMenorPrecoConsiderandoDistancia(produto.quantidade)
            this.listaMenorPrecoComDistancia.push(this.produto)
            
            //Limpar objeto
            this.produto = new Produto()

            this.calculaPrecoTotal()
            //Mensagem
            //alert('Melhor Preço do produto encontrado com sucesso!')
          },

          error: (err) => console.log(err)
        }
      )
    });

  }

  obterListaMenorPrecoDoApp(quantidade: number): void {
    this.popularObjetoProduto(quantidade, 0)
    this.produto.valor = this.produto.valor * this.porcentagem
    this.produto.precoTotal = this.produto.valor * this.produto.quantidade
  }

  obterListaMenorPrecoConsiderandoDistancia(quantidade: number): void {
    let tempValor: number = Number(this.produtoData?.precos.max)
    let tempIndex: number = 0
    let index: number = 0
    let encontrouProdutoMaisBarato = false
    
    this.produtoData?.produtos.forEach(produto => {
      console.log(`Distancia: ${produto.distkm}`)
      if(Number(produto.distkm) <= 2 && Number(produto.valor) < tempValor) {
        index = tempIndex
        tempValor = Number(produto.valor)
        encontrouProdutoMaisBarato = true
      }

      tempIndex +=1

    });

    if(encontrouProdutoMaisBarato)
      this.popularObjetoProduto(quantidade, index)
    else
      alert("Não foi encontrado produto mais barato em um raio de 2Km!")
    
  }

  obterListaMenorPreco(quantidade: number): void {
    this.popularObjetoProduto(quantidade, 0)
  }

  popularObjetoProduto(quantidade: number, index: number): void {
    this.produto.quantidade = quantidade
    this.produto.precoMax = this.produtoData?.precos.max
    this.produto.precoMin = this.produtoData?.precos.min
    this.produto.desc = this.produtoData?.produtos?.at(index)?.desc
    this.produto.distkm = Number(this.produtoData?.produtos?.at(index)?.distkm)
    this.produto.valor = Number(this.produtoData?.produtos?.at(index)?.valor)
    this.produto.tempo = this.produtoData?.produtos?.at(index)?.tempo
    this.produto.nm_empresa = this.produtoData?.produtos?.at(index)?.estabelecimento?.nm_emp
    this.produto.nm_logr = this.produtoData?.produtos?.at(index)?.estabelecimento?.nm_logr
    this.produto.nr_logr = this.produtoData?.produtos?.at(index)?.estabelecimento.nr_logr
    this.produto.bairro = this.produtoData?.produtos?.at(index)?.estabelecimento.bairro
    this.produto.mun = this.produtoData?.produtos?.at(index)?.estabelecimento.mun
    this.produto.uf = this.produtoData?.produtos?.at(index)?.estabelecimento.uf
    this.produto.precoTotal = this.produto.quantidade * this.produto.valor

    console.log(this.produto.precoTotal)
  }

  calculaPrecoTotal(): void {
    
    this.precoTotalListaMenorPreco = 0
    this.precoTotalListaMenorPrecoConsiderandoDistancia = 0
    this.precoTotalListaMenorPrecoDoApp = 0

    this.listaMenorPreco.forEach(produto => {
      this.precoTotalListaMenorPreco += (produto.precoTotal)
    });

    this.listaMenorPrecoComDistancia.forEach(produto => {
      this.precoTotalListaMenorPrecoConsiderandoDistancia += (produto.precoTotal)
    });

    this.listaMenorPrecoDoApp.forEach(produto => {
      this.precoTotalListaMenorPrecoDoApp += (produto.precoTotal)
    });

  }

/*
  alterar(): void {
    //Obter posicao no vetor onde esta o produto
    let posicao = this.produtos.findIndex(obj => {
      return obj.codigo = 
    })
  }
  */

  remover(posicao: number): void {
    this.produtos.splice(posicao , 1)
    console.log(`produtos.legth = ${this.produtos.length}`)
  }
  
}



