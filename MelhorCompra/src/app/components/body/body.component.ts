import { Component } from '@angular/core';
import { ProdutoIncluirComponent } from '../produto-incluir/produto-incluir.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [ProdutoIncluirComponent, HeaderComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
