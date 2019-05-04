import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisPage } from './analisis.page';

describe('AnalisisPage', () => {
  let component: AnalisisPage;
  let fixture: ComponentFixture<AnalisisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalisisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
