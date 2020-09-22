import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Equipamento } from 'src/app/models/equipamento';
import { EquipamentoService } from 'src/app/services/equipamento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-controle-producao',
  templateUrl: './controle-producao.component.html',
  styleUrls: ['./controle-producao.component.scss']
})
export class ControleProducaoComponent implements OnInit {

  equipamento = {} as Equipamento;
  equipamentos: Equipamento[];
  timerResult: any;

  constructor(private equipamentoService: EquipamentoService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEquipamentos();
  }

  // Chama o serviço para obtém todos os equipamentos
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

  startTimer(time): any {
    const dif: any = new Date(time);
    console.log(dif);
    let seconds: any = Math.floor((dif / 1000) % 60);
    let minutes: any = Math.floor((dif / (1000 * 60)) % 60);
    let hours: any = Math.floor((dif / (1000 * 60 * 60)) % 999);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return this.timerResult = hours + ':' + minutes + ':' + seconds;
    console.log(hours);
    // setTimeout(this.startTimer, 1000);
  }

  goToTelao(id) {
    console.log(id)
    // this.router.navigateByUrl('telao');
  }


}
