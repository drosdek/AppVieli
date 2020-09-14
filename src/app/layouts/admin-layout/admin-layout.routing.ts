import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TelaoComponent } from '../../pages/telao/telao.component';
import { ControleProducaoComponent } from '../../pages/controle-producao/controle-producao.component';
import { SettingsComponent } from 'src/app/pages/settings/settings.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard',	component: DashboardComponent },
  { path: 'telao',	component: TelaoComponent },
  { path: 'controle-producao', component: ControleProducaoComponent },
  { path: 'settings', component: SettingsComponent}
];
