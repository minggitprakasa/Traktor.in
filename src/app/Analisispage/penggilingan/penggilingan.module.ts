import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PenggilinganPage } from './penggilingan.page';

const routes: Routes = [
  {
    path: '',
    component: PenggilinganPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PenggilinganPage]
})
export class PenggilinganPageModule {}
