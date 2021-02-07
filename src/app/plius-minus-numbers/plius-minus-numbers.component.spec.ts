import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PliusMinusNumbersComponent } from './plius-minus-numbers.component';

describe('PliusMinusNumbersComponent', () => {
  let component: PliusMinusNumbersComponent;
  let fixture: ComponentFixture<PliusMinusNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PliusMinusNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PliusMinusNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
