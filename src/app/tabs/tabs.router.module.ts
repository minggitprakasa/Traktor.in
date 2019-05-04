import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: '../tab1/tab1.module#Tab1PageModule'
      },
      {
        path: 'tab2',
        loadChildren: '../tab2/tab2.module#Tab2PageModule'
      },
      {
        path: 'tab3',
        loadChildren: '../tab3/tab3.module#Tab3PageModule'
      },
      {
        path: 'tab1/analisis',
        loadChildren: '../tab1/analisis/analisis.module#AnalisisPageModule'
      },
      {
        path: 'tab1/monitoring',
        loadChildren: '../tab1/monitoring/monitoring.module#MonitoringPageModule'
      },
      {
        path: 'tab1/sharing',
        loadChildren: '../tab1/sharing/sharing.module#SharingPageModule'
      },
      {
        path: 'tab1/analisis/olahtanah',
        loadChildren: '../Analisispage/olahtanah/olahtanah.module#OlahtanahPageModule'
      },
      {
        path: 'tab1/analisis/irigasi',
        loadChildren: '../Analisispage/irigasi/irigasi.module#IrigasiPageModule'
      },
      {
        path: 'tab1/analisis/panen',
        loadChildren: '../Analisispage/panen/panen.module#PanenPageModule'
      },
      {
        path: 'tab1/analisis/penggilingan',
        loadChildren: '../Analisispage/penggilingan/penggilingan.module#PenggilinganPageModule'
      },
      {
        path: 'tab1/analisis/irigasi/detail',
        loadChildren: '../analisis-detail/analisis-detail.module#AnalisisDetailPageModule'
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
