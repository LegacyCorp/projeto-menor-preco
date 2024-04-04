import { Component } from '@angular/core';
import { IncluirProdutoComponent } from '../incluir-produto/incluir-produto.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [IncluirProdutoComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
