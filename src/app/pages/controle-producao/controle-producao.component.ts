import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Equipamento } from 'src/app/models/equipamento';
import { EquipamentoService } from 'src/app/services/equipamento.service';

@Component({
  selector: 'app-controle-producao',
  templateUrl: './controle-producao.component.html',
  styleUrls: ['./controle-producao.component.scss']
})
export class ControleProducaoComponent implements OnInit {

  equipamento = {} as Equipamento;
  equipamentos: Equipamento[];

  constructor(private equipamentoService: EquipamentoService) { }

  ngOnInit(): void {

    this.getEquipamentos();
  }

  // Chama o serviço para obtém todos os carros
  getEquipamentos(): void {
    this.equipamentoService.getEquipamentos().subscribe((equipamentos: Equipamento[]) => {
      this.equipamentos = equipamentos;
    });
  }

  // limpa o formulario
  cleanForm(form: NgForm): void {
    this.getEquipamentos();
    form.resetForm();
    this.equipamento = {} as Equipamento;
  }
}
