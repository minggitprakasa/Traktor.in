import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analisis-detail',
  templateUrl: './analisis-detail.page.html',
  styleUrls: ['./analisis-detail.page.scss'],
})
export class AnalisisDetailPage implements OnInit {

  constructor() { }

  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };

  ngOnInit() {
  }

}
