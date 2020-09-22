import { Component, OnInit, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Equipamento } from 'src/app/models/equipamento';
import { EquipamentoService } from 'src/app/services/equipamento.service';

import * as $ from 'jquery';


@Component({
  selector: 'app-telao',
  templateUrl: './telao.component.html',
  styleUrls: ['./telao.component.scss']
})
export class TelaoComponent implements OnInit {
  @ViewChild('fullScreen') divRef;

  equipamento = {} as Equipamento;
  equipamentos: Equipamento[];


  constructor(
    private equipamentoService: EquipamentoService
  ) { }


  ngOnInit(): void {

    this.getEquipamentos();

  }

  openFullscreen(): void {
    // Use this.divRef.nativeElement here to request fullscreen
    const elem = this.divRef.nativeElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
  }

  // Chama o serviço para obtém todos os equipamentos
  getEquipamentos(): void {
    this.equipamentoService.getEquipamentos().subscribe((equipamentos: Equipamento[]) => {
      this.equipamentos = equipamentos;
    });
    console.log(this.equipamentos);
  }

  getEquipamentoById(equipamento: number): void {
    this.equipamentoService.getEquipamentoById(equipamento).subscribe(() => {
      this.getEquipamentos();
    });
  }

  // limpa o formulario
  cleanForm(form: NgForm): void {
    this.getEquipamentos();
    form.resetForm();
    this.equipamento = {} as Equipamento;
  }
}
