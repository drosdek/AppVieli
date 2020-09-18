import { Routes } from '@angular/router';
import { SettingsComponent } from 'src/app/pages/settings/settings.component';
import { ControleProducaoComponent } from '../../controle-producao/controle-producao.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TelaoComponent } from '../../telao/telao.component';

export const AdminLayoutRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
      path: '',
    }]
  },
  {
    path: 'telao',
    component: TelaoComponent,
    children: [{
      path: '',
    }]
  },
  {
    path: '',
    component: ControleProducaoComponent,
    children: [{
      path: 'controle-producao',
      loadChildren: () => import('../admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
  {
    path: 'settings',
    component: SettingsComponent,
    children: [{
      path: '',
    }]
  }

  // { path: 'dashboard',	component: DashboardComponent },
  // { path: 'telao',	component: TelaoComponent },
  // { path: 'settings', component: SettingsComponent},
  // { path: 'controle-producao', component: ControleProducaoComponent }
];
