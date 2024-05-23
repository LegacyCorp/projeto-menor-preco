import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../models/Produto';

@Component({
  selector: 'app-menor-preco-carrefour',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menor-preco-carrefour.component.html',
  styleUrl: './menor-preco-carrefour.component.css'
})
export class MenorPrecoCarrefourComponent {

  @Input() listaProdutos: Produto[] = []
  @Input() precoTotalProdutos: number = 0
  @Input() distancia:number = 0
}
