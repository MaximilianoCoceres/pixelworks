import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosDetailsComponent } from './servicios-details.component';

describe('ServiciosDetailsComponent', () => {
  let component: ServiciosDetailsComponent;
  let fixture: ComponentFixture<ServiciosDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiciosDetailsComponent]
    });
    fixture = TestBed.createComponent(ServiciosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
