import { TestBed, inject } from '@angular/core/testing';

import { DashboardServiceService } from './dashboard-service.service';
import { RouterTestingModule } from '@angular/router/testing';
import { BackEndInterceptorService } from '../shared/back-end-interceptor.service';
import { HttpClientModule } from '@angular/common/http';

describe('DashboardServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardServiceService, BackEndInterceptorService],
      imports: [ RouterTestingModule, HttpClientModule ]
    });
  });

  it('should be created', inject([DashboardServiceService], (service: DashboardServiceService) => {
    expect(service).toBeTruthy();
  }));
  it('should return available service', () => {
    // let languages = DashboardServiceService.get();
    // expect(languages).toContain('en');
    // expect(languages).toContain('es');
    // expect(languages).toContain('fr');
    // expect(languages.length).toEqual(3);
  });
});
