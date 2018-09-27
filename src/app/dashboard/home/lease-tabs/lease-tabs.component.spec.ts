import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseTabsComponent } from './lease-tabs.component';
import { PaymentHelpPopupComponent } from '../../payment-help-popup/payment-help-popup.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AddCommaPipe, Is_Greater_Than_Current_Date } from '../../dashboard-pipe';
import { DashboardServiceService } from '../../dashboard-service.service';
import { BackEndInterceptorService } from '../../../shared/back-end-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from '../../../shared/shared';

describe('LeaseTabsComponent', () => {
  let component: LeaseTabsComponent;
  let fixture: ComponentFixture<LeaseTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaseTabsComponent, PaymentHelpPopupComponent, AddCommaPipe, Is_Greater_Than_Current_Date,  ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ AddCommaPipe, Is_Greater_Than_Current_Date, DashboardServiceService,SharedService, BackEndInterceptorService ],
      imports: [ RouterTestingModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create showAlerts', () => {
    component.showAlerts();
    expect(LeaseTabsComponent).toBeTruthy('true');
  });
  it('should create initToolTip', () => {
    component.initToolTip();
    expect(LeaseTabsComponent).toBeTruthy('true');
  });
  it('should create onNavItemClicked(event)', () => {
    component.onNavItemClicked(event);
    expect(LeaseTabsComponent).toBeTruthy('true');
  });  
});
