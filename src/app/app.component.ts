import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ultimoID = 0;
  nome = 'Teste';
  adicionado = false;
  funcionarios = [];

  adicionar() {
    console.log(`Adicionado ${this.nome}`);
    this.adicionado = true;

    this.funcionarios.push({
      id: Math.floor((Math.random() * 6) + 1),
      nome: this.nome
  });
  }
}
