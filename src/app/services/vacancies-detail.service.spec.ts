import { TestBed } from '@angular/core/testing';

import { VacanciesDetailService } from './vacancies-detail.service';

describe('VacanciesDetailService', () => {
  let service: VacanciesDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacanciesDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
