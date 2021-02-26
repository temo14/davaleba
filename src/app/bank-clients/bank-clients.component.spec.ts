import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankClientsComponent } from './bank-clients.component';

describe('BankClientsComponent', () => {
  let component: BankClientsComponent;
  let fixture: ComponentFixture<BankClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
