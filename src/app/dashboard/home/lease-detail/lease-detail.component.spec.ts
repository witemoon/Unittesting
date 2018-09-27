import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseDetailComponent } from './lease-detail.component';
import { DashboardServiceService } from '../../dashboard-service.service';
import { BackEndInterceptorService } from '../../../shared/back-end-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('LeaseDetailComponent', () => {
  let component: LeaseDetailComponent;
  let fixture: ComponentFixture<LeaseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [DashboardServiceService, BackEndInterceptorService],
      declarations: [ LeaseDetailComponent ],
      imports: [ HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(LeaseDetailComponent).toBeTruthy('data');
  });
  
});
