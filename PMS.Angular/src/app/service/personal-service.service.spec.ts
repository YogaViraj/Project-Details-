/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { PersonalServiceService } from './personal-service.service';

describe('PersonalserviceService', () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonalServiceService]
    });
  });

  it('should be created', inject([PersonalServiceService], (service: PersonalServiceService) => {
    expect(service).toBeTruthy();
  }));
});