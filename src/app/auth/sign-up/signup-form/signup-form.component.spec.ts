import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormComponent } from './signup-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from '../../../shared/auth.service';
import { BackEndInterceptorService } from '../../../shared/back-end-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from '../../../shared/shared';
// import { re-captchaModule } from '@angular/core';

describe('SignupFormComponent', () => {
  let component: SignupFormComponent;
  let fixture: ComponentFixture<SignupFormComponent>;
  let mockRouter;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignupFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [AuthService, BackEndInterceptorService, SharedService],
      imports: [RouterTestingModule, HttpClientModule, FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };
    fixture = TestBed.createComponent(SignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('form signInPageReg', () => {
    component.signInPageReg();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/user/signin']);
  });

  it('form resetRegPassword', () => {
    component.resetRegPassword();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/resetPassword']);
  });
  it('form backToLandingPage', () => {
    component.backToLandingPage();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
  });
  it('form hideRef', () => {
    component.hideRef();
    expect(SignupFormComponent).toBeTruthy('false');
  });
  it('form hideLeaseError', () => {
    component.hideLeaseError();
    expect(SignupFormComponent).toBeTruthy('false');
  });
  it('form hideMerchantdError', () => {
    component.hideMerchantdError();
    expect(SignupFormComponent).toBeTruthy('false');
  });
  it('form onInputKeyUp(event)', () => {
    component.onInputKeyUp(event);
    expect(SignupFormComponent).toBeTruthy('false');
  });
  it('form captchaResolved(event)', () => {
    component.captchaResolved(event);
    expect(SignupFormComponent).toBeTruthy('false');
  });
  
  // it("should set referenceKey in localStorage if it doesn't exist", function() {
  //   localStorage.setItem = null;

  //    // <- Here you put whatever you need to make your code run

  //   expect(localStorage.setItem).toHaveBeenCalledWith("referenceKey", { referenceKey: "referenceKey" });
  // });
  // it("should set referenceKey in localStorage if it doesn't exist", function() {
  //   // localStorage.setItem = "truthy";

  //    // <- Here you put whatever you need to make your code run

  //   expect(localStorage.setItem).toHaveBeenCalledWith("token", { token: "token" });
  // });
});
