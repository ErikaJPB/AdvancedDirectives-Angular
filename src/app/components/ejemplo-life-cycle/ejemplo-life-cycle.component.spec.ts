import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploLifeCycleComponent } from './ejemplo-life-cycle.component';

describe('EjemploLifeCycleComponent', () => {
  let component: EjemploLifeCycleComponent;
  let fixture: ComponentFixture<EjemploLifeCycleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjemploLifeCycleComponent]
    });
    fixture = TestBed.createComponent(EjemploLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
