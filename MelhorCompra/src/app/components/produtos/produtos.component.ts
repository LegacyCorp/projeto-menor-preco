import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { Produto } from '../../models/Produto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {

  produto = new Produto()

  //Json de produtos na lista de compras
  produtos:Produto[] = []

  incluirProdutoNaLista():void {

  }
}
