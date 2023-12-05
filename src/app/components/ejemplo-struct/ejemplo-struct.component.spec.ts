import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploStructComponent } from './ejemplo-struct.component';

describe('EjemploStructComponent', () => {
  let component: EjemploStructComponent;
  let fixture: ComponentFixture<EjemploStructComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjemploStructComponent]
    });
    fixture = TestBed.createComponent(EjemploStructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
