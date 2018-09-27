import { TestBed, inject } from '@angular/core/testing';

import { BackEndInterceptorService } from './back-end-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('BackEndService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackEndInterceptorService],
      imports: [ HttpClientModule, RouterTestingModule ]
    });
  });

  it('should be created', inject([BackEndInterceptorService], (service: BackEndInterceptorService) => {
    expect(service).toBeTruthy();
  }));
  // it('should call the refresh action on Refresh-Button click with the given values',
  // fakesync(() => {
  //   spyOn(BackEndInterceptorService, 'postUrl');
  //   spyOn(BackEndInterceptorService, 'update');

  //   let refreshButtonDebugElement = queryElement('.submit-btn', fixture);
  //   refreshButtonDebugElement.triggerEventHandler('click', null);

  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     expect(BackEndInterceptorService.postUrl).toHaveBeenCalled(); //evaluates to true
  //     expect(BackEndInterceptorService.update).toHaveBeenCalled(); //throws the error Expected spy update to have been called. 
  //   });
});
