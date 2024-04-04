import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../models/Produto';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../../service/produto.service';

@Component({
  selector: 'app-incluir-produto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './incluir-produto.component.html',
  styleUrl: './incluir-produto.component.css'
})

export class IncluirProdutoComponent {

  //Objeto do tipo Produto
  produto = new Produto()

  //Visibilidade botao cadastrar
  //btnCadastro:boolean = true

  //construtor
  constructor(private servico:ProdutoService) {
  }

  //Metodo para cadastrar produto na lista
  cadastrarProduto():void {
    this.servico.cadastrarProduto(this.produto)
      .subscribe(retorno => {
        //cadastrar produto no vetor
        this.produto = new Produto()

        //mensagem
        alert("Produto cadastrado com sucesso.")
      })
  }

}
