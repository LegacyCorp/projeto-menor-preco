import { Component } from '@angular/core';
import { IncluirProdutoComponent } from '../../components/incluir-produto/incluir-produto.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IncluirProdutoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
