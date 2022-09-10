import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutCartComponent } from './donut-cart.component';

describe('DonutCartComponent', () => {
  let component: DonutCartComponent;
  let fixture: ComponentFixture<DonutCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonutCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonutCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
