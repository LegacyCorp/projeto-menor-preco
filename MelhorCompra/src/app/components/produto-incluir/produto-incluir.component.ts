import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../models/Produto';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../../service/produto.service';
import { HttpClient } from '@angular/common/http';
import { ProdutoData } from '../../models/ProdutoData';

@Component({
  selector: 'app-produto-incluir',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './produto-incluir.component.html',
  styleUrl: './produto-incluir.component.css'
})

export class ProdutoIncluirComponent {

  //objeto do tipo produto
  produto = new Produto()
  
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

     //Limpar formulário
     this.produto = new Produto()

     //Mensagem
     alert('Produto cadastrado com sucesso!')
  }

  procurarMelhorPreco(produtos:Produto[]) {

    //Limpar lista de compras
    this.listaMenorPreco = []
    this.listaMenorPrecoComDistancia = []

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

          this.obterListaMenorPrecoConsiderandoDistancia(produto.quantidade)
          this.listaMenorPrecoComDistancia.push(this.produto)

          //Limpar objeto
          this.produto = new Produto()


          
          //Mensagem
          //alert('Melhor Preço do produto encontrado com sucesso!')
        },
        error: (err) => console.log(err)
        }
      )
    });

  }

  obterListaMenorPrecoConsiderandoDistancia(quantidade: number): void {
    let tempValor: number = Number(this.produtoData?.precos.max)
    let tempIndex: number = 0
    let index: number = 0
    let encontrouProdutoMaisBarato = false
    
    this.produtoData?.produtos.forEach(produto => {
      console.log(`Distancia: ${produto.distkm}`)
      if(Number(produto.distkm) <= 2 && Number(produto.valor) < tempValor) {
        console.log("Aqui...")
        index = tempIndex
        tempValor = Number(produto.valor)
        encontrouProdutoMaisBarato = true
      }

      tempIndex +=1

    });

    if(encontrouProdutoMaisBarato) {
      this.produto.quantidade = quantidade
      this.produto.precoMax = this.produtoData?.precos.max
      this.produto.precoMin = this.produtoData?.precos.min
      this.produto.desc = this.produtoData?.produtos?.at(index)?.desc
      this.produto.distkm = this.produtoData?.produtos?.at(index)?.distkm
      this.produto.valor = this.produtoData?.produtos?.at(index)?.valor
      this.produto.tempo = this.produtoData?.produtos?.at(index)?.tempo
      this.produto.nm_empresa = this.produtoData?.produtos?.at(index)?.estabelecimento?.nm_emp
      this.produto.nm_logr = this.produtoData?.produtos?.at(index)?.estabelecimento?.nm_logr
      this.produto.nr_logr = this.produtoData?.produtos?.at(index)?.estabelecimento.nr_logr
      this.produto.bairro = this.produtoData?.produtos?.at(index)?.estabelecimento.bairro
      this.produto.mun = this.produtoData?.produtos?.at(index)?.estabelecimento.mun
      this.produto.uf = this.produtoData?.produtos?.at(index)?.estabelecimento.uf
    }
    else {
      alert("Não foi encontrado produto mais barato em um raio de 2Km!")
    }
    
  }

  obterListaMenorPreco(quantidade: number): void {
    this.produto.quantidade = quantidade
    this.produto.precoMax = this.produtoData?.precos.max
    this.produto.precoMin = this.produtoData?.precos.min
    this.produto.desc = this.produtoData?.produtos?.at(0)?.desc
    this.produto.distkm = this.produtoData?.produtos?.at(0)?.distkm
    this.produto.valor = this.produtoData?.produtos?.at(0)?.valor
    this.produto.tempo = this.produtoData?.produtos?.at(0)?.tempo
    this.produto.nm_empresa = this.produtoData?.produtos?.at(0)?.estabelecimento?.nm_emp
    this.produto.nm_logr = this.produtoData?.produtos?.at(0)?.estabelecimento?.nm_logr
    this.produto.nr_logr = this.produtoData?.produtos?.at(0)?.estabelecimento.nr_logr
    this.produto.bairro = this.produtoData?.produtos?.at(0)?.estabelecimento.bairro
    this.produto.mun = this.produtoData?.produtos?.at(0)?.estabelecimento.mun
    this.produto.uf = this.produtoData?.produtos?.at(0)?.estabelecimento.uf
  }
}



