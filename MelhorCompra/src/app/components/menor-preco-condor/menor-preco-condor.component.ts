import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../models/Produto';

@Component({
  selector: 'app-menor-preco-condor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menor-preco-condor.component.html',
  styleUrl: './menor-preco-condor.component.css'
})
export class MenorPrecoCondorComponent {

  @Input() listaProdutos: Produto[] = []
  @Input() precoTotalProdutos: number = 0
  @Input() distancia:number = 0
}
