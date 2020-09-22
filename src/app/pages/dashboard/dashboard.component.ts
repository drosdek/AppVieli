import { Component, OnInit } from '@angular/core';
import { Equipamento } from 'src/app/models/equipamento';
import { EquipamentoService } from 'src/app/services/equipamento.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  equipamento = {} as Equipamento;
  equipamentos: Equipamento[];

  constructor(private equipamentoService: EquipamentoService) { }

  ngOnInit(): void {
    this.getEquipamentos();
  }

  // Chama o serviço para obtém todos os equipamentos
  getEquipamentos(): void {
    this.equipamentoService.getEquipamentos().subscribe((equipamentos: Equipamento[]) => {
      this.equipamentos = equipamentos;
    });
  }
}
