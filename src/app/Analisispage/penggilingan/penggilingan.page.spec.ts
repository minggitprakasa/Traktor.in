import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenggilinganPage } from './penggilingan.page';

describe('PenggilinganPage', () => {
  let component: PenggilinganPage;
  let fixture: ComponentFixture<PenggilinganPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenggilinganPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenggilinganPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
