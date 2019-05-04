import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlahtanahPage } from './olahtanah.page';

describe('OlahtanahPage', () => {
  let component: OlahtanahPage;
  let fixture: ComponentFixture<OlahtanahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlahtanahPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlahtanahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
