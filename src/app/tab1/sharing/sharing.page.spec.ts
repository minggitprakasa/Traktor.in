import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingPage } from './sharing.page';

describe('SharingPage', () => {
  let component: SharingPage;
  let fixture: ComponentFixture<SharingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
