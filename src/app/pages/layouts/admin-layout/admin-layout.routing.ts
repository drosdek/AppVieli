import { Routes } from '@angular/router';
import { SettingsComponent } from 'src/app/pages/settings/settings.component';
import { ControleProducaoComponent } from '../../controle-producao/controle-producao.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TelaoComponent } from '../../telao/telao.component';

export const AdminLayoutRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'dashboard',
      component: DashboardComponent,
    }]
  },
  {
    path: '',
    children: [{
      path: 'telao',
      component: TelaoComponent,
      loadChildren: () => import('../../telao/telao.module').then(m => m.TelaoModule)
    }]
  },
  {
    path: '',
    children: [{
      path: 'controle-producao',
      component: ControleProducaoComponent,
      loadChildren: () => import('../../controle-producao/controle-producao.module').then(m => m.ControleProducaoModule)
    }]
  },
  {
    path: '',
    children: [{
      path: 'settings',
      component: SettingsComponent
    }]
  }
];
