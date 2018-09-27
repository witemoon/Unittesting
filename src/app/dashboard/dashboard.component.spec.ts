import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedService } from '../shared/shared';
import { DashboardServiceService } from './dashboard-service.service';
import { BackEndInterceptorService } from '../shared/back-end-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../shared/auth.service';
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockRouter;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ SharedService, DashboardServiceService, BackEndInterceptorService, AuthService ],
      declarations: [ DashboardComponent, LeftSideBarComponent, RightSideBarComponent ],
      imports: [ RouterTestingModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Navigating to dashboard',async( () => {
    // expect(component).toBeTruthy();
    component.ngOnInit();
    expect (mockRouter.navigate).toHaveBeenCalledWith (['/error401']);
  }));
});
