import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'analisis', loadChildren: './tab1/analisis/analisis.module#AnalisisPageModule' },
  { path: 'monitoring', loadChildren: './tab1/monitoring/monitoring.module#MonitoringPageModule' },
  { path: 'sharing', loadChildren: './tab1/sharing/sharing.module#SharingPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
