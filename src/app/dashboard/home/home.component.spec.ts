import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { LeaseTabsComponent } from './lease-tabs/lease-tabs.component';
import { LeaseBlockComponent } from './lease-block/lease-block.component';
import { LeaseDetailComponent } from './lease-detail/lease-detail.component';
import { PaymentHelpPopupComponent } from '../payment-help-popup/payment-help-popup.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AddCommaPipe, Is_Greater_Than_Current_Date } from '../dashboard-pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedService } from '../../shared/shared';
import { DashboardServiceService } from '../dashboard-service.service';
import { BackEndInterceptorService } from '../../shared/back-end-interceptor.service';
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, AddCommaPipe, Is_Greater_Than_Current_Date, BreadcrumbComponent, LeaseBlockComponent, PaymentHelpPopupComponent, LeaseDetailComponent, LeaseTabsComponent  ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ AddCommaPipe, Is_Greater_Than_Current_Date, SharedService, DashboardServiceService, BackEndInterceptorService],
      imports: [ RouterTestingModule, HttpClientModule, ]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
