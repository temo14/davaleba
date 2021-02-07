import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersCheckComponent } from './numbers-check.component';

describe('NumbersCheckComponent', () => {
  let component: NumbersCheckComponent;
  let fixture: ComponentFixture<NumbersCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbersCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbersCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
