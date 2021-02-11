import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsCandidatesComponent } from './jobs-candidates.component';

describe('JobsCandidatesComponent', () => {
  let component: JobsCandidatesComponent;
  let fixture: ComponentFixture<JobsCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsCandidatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
