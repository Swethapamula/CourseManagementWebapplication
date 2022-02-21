import { TestBed } from '@angular/core/testing';

import { ProfessorguardService } from './professorguard.service';

describe('ProfessorguardService', () => {
  let service: ProfessorguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessorguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
