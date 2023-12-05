import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploAttrComponent } from './ejemplo-attr.component';

describe('EjemploAttrComponent', () => {
  let component: EjemploAttrComponent;
  let fixture: ComponentFixture<EjemploAttrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjemploAttrComponent]
    });
    fixture = TestBed.createComponent(EjemploAttrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
