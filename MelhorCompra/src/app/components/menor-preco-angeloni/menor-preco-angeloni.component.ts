import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../models/Produto';

@Component({
  selector: 'app-menor-preco-angeloni',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menor-preco-angeloni.component.html',
  styleUrl: './menor-preco-angeloni.component.css'
})
export class MenorPrecoAngeloniComponent {

  @Input() listaProdutos: Produto[] = []
  @Input() precoTotalProdutos: number = 0
  @Input() distancia:number = 0
}
