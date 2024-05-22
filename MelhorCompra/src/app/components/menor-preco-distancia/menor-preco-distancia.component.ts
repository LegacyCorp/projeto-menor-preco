import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../models/Produto';

@Component({
  selector: 'app-menor-preco-distancia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menor-preco-distancia.component.html',
  styleUrl: './menor-preco-distancia.component.css'
})
export class MenorPrecoDistanciaComponent {

  @Input() listaProdutos: Produto[] = []
  @Input() precoTotalProdutos: number = 0
  @Input() distancia: number = 0

}
