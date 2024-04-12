import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../models/Produto';

@Component({
  selector: 'app-menor-preco',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menor-preco.component.html',
  styleUrl: './menor-preco.component.css'
})
export class MenorPrecoComponent {

  @Input() listaProdutos: Produto[] = []
  @Input() precoTotalProdutos: number = 0
  
}
