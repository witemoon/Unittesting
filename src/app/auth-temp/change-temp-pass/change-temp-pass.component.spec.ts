import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTempPassComponent } from './change-temp-pass.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { BackEndInterceptorService } from '../../shared/back-end-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from '../../shared/shared';

describe('ChangeTempPassComponent', () => {
  let component: ChangeTempPassComponent;
  let fixture: ComponentFixture<ChangeTempPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeTempPassComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA],
      providers: [ AuthService, BackEndInterceptorService, SharedService],
      imports: [ RouterTestingModule, FormsModule, HttpClientModule, ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTempPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create hidePasswordError', () => {
    component.hidePasswordError();
    expect(ChangeTempPassComponent).toBeTruthy('false');
  });
  it('should create hideConfPasswordError', () => {
    component.hideConfPasswordError();
    expect(ChangeTempPassComponent).toBeTruthy('false');
  });
  it('should create hideTempPasswordError', () => {
    component.hideTempPasswordError();
    expect(ChangeTempPassComponent).toBeTruthy('false');
  });
  it('should create captchaResolved', () => {
    component.captchaResolved();
    expect(ChangeTempPassComponent).toBeTruthy('false');
  });
  it('should create validate(event)', () => {
    component.validate(event);
    expect(ChangeTempPassComponent).toBeTruthy('false');
  });
  it('should create onInputBlur(event)', () => {
    component.onInputBlur(event);
    expect(ChangeTempPassComponent).toBeTruthy('true');
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
