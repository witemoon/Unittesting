import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseBlockComponent } from './lease-block.component';
import { DashboardServiceService } from '../../dashboard-service.service';
import { BackEndInterceptorService } from '../../../shared/back-end-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedService } from '../../../shared/shared';

describe('LeaseBlockComponent', () => {
  let component: LeaseBlockComponent;
  let fixture: ComponentFixture<LeaseBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [DashboardServiceService, BackEndInterceptorService, SharedService],
      declarations: [ LeaseBlockComponent ],
      imports: [ HttpClientModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
