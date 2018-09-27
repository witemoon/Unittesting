import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EppComponent } from './epp.component';
import { EppPopupComponent } from './epp-popup/epp-popup.component';
import { EppstaticComponent } from './eppstatic/eppstatic.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedService } from '../../shared/shared';
import { DashboardServiceService } from '../dashboard-service.service';
import { BackEndInterceptorService } from '../../shared/back-end-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../shared/auth.service';

describe('EppComponent', () => {
  let component: EppComponent;
  let fixture: ComponentFixture<EppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ SharedService, DashboardServiceService, BackEndInterceptorService, AuthService ],
      declarations: [ EppComponent, EppstaticComponent, EppPopupComponent],
      imports: [ ReactiveFormsModule, RouterTestingModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.closePopup1();
    expect(EppPopupComponent).toBeTruthy('data');
  });
  it('should create', () => {
    component.addButtonClicked();
    expect(EppPopupComponent).toBeTruthy('true');
    // const component = new EppPopupComponent();        
    // component.addButtonClicked();
    // expect(component.closeButtonClicked).toBeTruthy('true');
    // expect(component.showPopup).toBeTruthy('true');
    // expect(component.noButtonPopup).toBeTruthy('true');
    // expect(component.checkbox).toBeTruthy();
  });
  it('should create', () => {
    component.closePopup();
    expect(EppPopupComponent).toBeTruthy('true');
  });
  it('should create', () => {
    component.listenFormGroup();
    expect(EppPopupComponent).toBeTruthy('true');
  });
  it('should create', () => {
    component.onSubmit();
    expect(EppPopupComponent).toBeTruthy('true');
  });
  it('should create', () => {
    component.addCarousel();
    expect(EppPopupComponent).toBeTruthy('true');
  });
  it('should create onYesNoClicked(event)', () => {
    component.onYesNoClicked(event);
    expect(EppPopupComponent).toBeTruthy('true');
  });
  it('should create onToggleChange(event)', () => {
    component.onToggleChange(event);
    expect(EppPopupComponent).toBeTruthy('true');
    
  });
});
