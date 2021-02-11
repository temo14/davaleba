import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsVacanciesComponent } from './jobs-vacancies.component';

describe('JobsVacanciesComponent', () => {
  let component: JobsVacanciesComponent;
  let fixture: ComponentFixture<JobsVacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsVacanciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
