import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

  nome = 'Teste';
  adicionado = false;
  @Output('criado') funcionarioAdicionado = new EventEmitter();


  adicionar() {
    this.adicionado = true;

    const funcionario = {
      id:  Math.floor((Math.random() * 100) + 1),
      nome: this.nome
    };

    this.funcionarioAdicionado.emit(funcionario);
  }

}
