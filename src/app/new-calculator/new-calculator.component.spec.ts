import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCalculatorComponent } from './new-calculator.component';

describe('NewCalculatorComponent', () => {
  let component: NewCalculatorComponent;
  let fixture: ComponentFixture<NewCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
