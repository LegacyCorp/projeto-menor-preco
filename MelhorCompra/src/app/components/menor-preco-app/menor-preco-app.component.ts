import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../models/Produto';

@Component({
  selector: 'app-menor-preco-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menor-preco-app.component.html',
  styleUrl: './menor-preco-app.component.css'
})
export class MenorPrecoAppComponent {

  @Input() listaProdutos: Produto[] = []
  @Input() precoTotalProdutos: number = 0

}
