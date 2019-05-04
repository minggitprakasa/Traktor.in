import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanenPage } from './panen.page';

describe('PanenPage', () => {
  let component: PanenPage;
  let fixture: ComponentFixture<PanenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
