import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrigasiPage } from './irigasi.page';

describe('IrigasiPage', () => {
  let component: IrigasiPage;
  let fixture: ComponentFixture<IrigasiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrigasiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrigasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
