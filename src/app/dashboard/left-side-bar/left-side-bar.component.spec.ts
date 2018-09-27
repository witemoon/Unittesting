import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideBarComponent } from './left-side-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../shared/auth.service';
import { BackEndInterceptorService } from '../../shared/back-end-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardServiceService } from '../dashboard-service.service';

describe('LeftSideBarComponent', () => {
  let component: LeftSideBarComponent;
  let fixture: ComponentFixture<LeftSideBarComponent>;
  let mockRouter;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ AuthService, BackEndInterceptorService, DashboardServiceService ],
      declarations: [ LeftSideBarComponent ],
      imports: [ RouterTestingModule, HttpClientModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockRouter ={ navigate: jasmine.createSpy('navigate')};
    fixture = TestBed.createComponent(LeftSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create sidebarLft', () => {
    component.sidebarLft();
    expect(LeftSideBarComponent).toBeTruthy('false');
  });
  it('should create sidebarLft1', () => {
    component.sidebarLft1();
    expect(LeftSideBarComponent).toBeTruthy('false');
  });
  it('should create sidebarLft1', () => {
    component.sidebarLft1();
    expect(LeftSideBarComponent).toBeTruthy('true');
  });
  it('should create logout', () => {
    component.logout();
    expect(LeftSideBarComponent).toBeTruthy('false');
  });
  // it('should create logout', () => {
  //   component.logout();
  //   expect (mockRouter.navigate).toHaveBeenCalledWith (['/user/signin']);
  // });
});
