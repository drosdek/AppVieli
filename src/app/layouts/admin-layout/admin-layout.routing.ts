import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TelaoComponent } from 'src/app/telao/telao.component';
import { ControleProducaoComponent } from 'src/app/controle-producao/controle-producao.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard',	component: DashboardComponent },
  { path: 'telao',	component: TelaoComponent },
  { path: 'controle-producao', component: ControleProducaoComponent }
];
