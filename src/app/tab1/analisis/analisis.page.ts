import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.page.html',
  styleUrls: ['./analisis.page.scss'],
})
export class AnalisisPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  IrigasiPage() {
    this.router.navigateByUrl('/tabs/tab1/analisis/irigasi');
  }
  OlahTanahPage() {
    this.router.navigateByUrl('/tabs/tab1/analisis/olahtanah');
  }
  PanenPage() {
    this.router.navigateByUrl('/tabs/tab1/analisis/panen');
  }
  PenggilinganPage() {
    this.router.navigateByUrl('/tabs/tab1/analisis/penggilingan');
  }
}
