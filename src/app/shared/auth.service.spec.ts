import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { BackEndInterceptorService } from './back-end-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, BackEndInterceptorService ],
      imports: [ HttpClientModule, RouterTestingModule ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
