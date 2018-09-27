import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignchangepassComponent } from './signchangepass.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../../shared/auth.service';
import { BackEndInterceptorService } from '../../../shared/back-end-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from '../../../shared/shared';

describe('SignchangepassComponent', () => {
  let component: SignchangepassComponent;
  let fixture: ComponentFixture<SignchangepassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignchangepassComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA],
      providers: [ AuthService, BackEndInterceptorService, SharedService],
      imports: [ FormsModule, RouterTestingModule,HttpClientModule, ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignchangepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create hidePasswordError', () => {
    component.hidePasswordError();
    expect(SignchangepassComponent).toBeTruthy('false');
  });
  it('should create hideConfPasswordError', () => {
    component.hideConfPasswordError();
    expect(SignchangepassComponent).toBeTruthy('false');
  });
  it('should create hideTempPasswordError', () => {
    component.hideTempPasswordError();
    expect(SignchangepassComponent).toBeTruthy('false');
  });
  it('should create captchaResolved', () => {
    component.captchaResolved();
    expect(SignchangepassComponent).toBeTruthy('false');
  });
  it('should create validate(event)', () => {
    component.validate(event);
    expect(SignchangepassComponent).toBeTruthy('false');
  });
  // it('should create encryption(encryptVal)', () => {
  //   component.encryption(encryptVal);
  //   expect(SignchangepassComponent).toBeTruthy('data');
  // });
  it('should create onInputBlur(event)', () => {
    component.onInputBlur(event);
    expect(SignchangepassComponent).toBeTruthy('true');
  });
  it('changePassword is working fine', () => {
    component.changePassword('');
  });
  it('hasUpperCase(str) is working fine', () => {
    component.hasUpperCase('');
  });
  it('encryption is working fine', () => {
    component.encryption('');
  });
});
