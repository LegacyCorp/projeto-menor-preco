import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../models/Produto';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../../service/produto.service';
import { HttpClient } from '@angular/common/http';

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

  //JSON de produtos
  produtos:Produto[] = []

  constructor(private service:ProdutoService) { }

  cadastrarProduto():void {
    this.produtos.push(this.produto)
    console.log("produtos.length = " + this.produtos.length)

     //Limpar formulário
     this.produto = new Produto()

     //Mensagem
     alert('Produto cadastrado com sucesso!')
  }

  procurarMelhorPreco(produtos:Produto[]):void {
    this.service.procurarMelhorPreco(produtos)
  }
}
