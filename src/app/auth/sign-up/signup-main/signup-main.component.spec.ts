import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupMainComponent } from './signup-main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SignupFormComponent } from '../signup-form/signup-form.component';
import { SignupStatComponent } from '../signup-stat/signup-stat.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from '../../../shared/auth.service';
import { BackEndInterceptorService } from '../../../shared/back-end-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from '../../../shared/shared';
describe('SignupMainComponent', () => {
  let component: SignupMainComponent;
  let fixture: ComponentFixture<SignupMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupMainComponent, SignupFormComponent,SignupStatComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ AuthService, BackEndInterceptorService, SharedService ],
      imports: [ RouterTestingModule, HttpClientModule, FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
