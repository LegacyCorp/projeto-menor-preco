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
  produtosNaLista: Produto[] = []

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
    this.produtosNaLista = []

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

          this.produto.quantidade = produto.quantidade
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

          //this.produtosNaLista.push(this.tempProd)
          this.produtosNaLista.push(this.produto)
          console.log(this.produtosNaLista)

          //Limpar objeto
          this.produto = new Produto()

          //Mensagem
          //alert('Melhor Preço do produto encontrado com sucesso!')
        },
        error: (err) => console.log(err)
        }
      )
    });

    /*
    this.service.procurarMelhorPreco(produtos).subscribe(
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

          //console.log(`valorProduto => ${this.produtoData?.produtos?.at(0)?.valor}`)
          //console.log(`valorProduto => ${this.produtoData?.produtos?.at(10)?.valor}`)

          /*
          this.tempProd.precoMax = this.produtoData?.precos.max
          this.tempProd.precoMin = this.produtoData?.precos.min
          this.tempProd.desc = this.produtoData?.produtos?.at(0)?.desc
          this.tempProd.distkm = this.produtoData?.produtos?.at(0)?.distkm
          this.tempProd.valor = this.produtoData?.produtos?.at(0)?.valor
          this.tempProd.tempo = this.produtoData?.produtos?.at(0)?.tempo
          this.tempProd.nm_empresa = this.produtoData?.produtos?.at(0)?.estabelecimento?.nm_emp
          this.tempProd.nm_logr = this.produtoData?.produtos?.at(0)?.estabelecimento?.nm_logr
          this.tempProd.nr_logr = this.produtoData?.produtos?.at(0)?.estabelecimento.nr_logr
          this.tempProd.bairro = this.produtoData?.produtos?.at(0)?.estabelecimento.bairro
          this.tempProd.mun = this.produtoData?.produtos?.at(0)?.estabelecimento.mun
          this.tempProd.uf = this.produtoData?.produtos?.at(0)?.estabelecimento.uf
          

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

          //this.produtosNaLista.push(this.tempProd)
          this.produtosNaLista.push(this.produto)
          console.log(this.produtosNaLista)

          //Limpar objeto
          this.produto = new Produto()

          //Mensagem
          alert('Melhor Preço do produto encontrado com sucesso!')
        },
        error: (err) => console.log(err)
      }
    ) 
    */
  }
}
