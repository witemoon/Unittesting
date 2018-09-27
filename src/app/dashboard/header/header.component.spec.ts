import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';
import { BackEndInterceptorService } from '../../shared/back-end-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA],
      providers: [ DashboardServiceService, BackEndInterceptorService, ],
      imports: [ HttpClientModule, RouterTestingModule, ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create showAlerts', () => {
    component.showAlerts();
    expect(HeaderComponent).toBeTruthy('true');
  });
  it('should create ngAfterViewInit', () => {
    component.ngAfterViewInit();
    expect(HeaderComponent).toBeTruthy('show');
  });
  // it("should call getUsers and return list of users", async(() => {
  //   const response: totalBadgeCount[] = [];
  
  //   spyOn(DashboardServiceService, 'changeObject').and.returnValue(of(response))
  
  //   HeaderComponent.data();
  
  //   fixture.detectChanges();
  
  //   expect(HeaderComponent.totalBadgeCount).toEqual(response);
  // }));it('should call totalBadgeCount', () => {
  //   const spy =  spyOn(component, 'data['totalBadgeCount']');
  //   component.factor = 'Your mock data goes here'
  //   component.loadData();       // should execute if part
  //   expect(spy).toHaveBeenCalled();
  // })

  // it('should call method2 if factor not exist', () =>{
  //   const spy =  spyOn(component, 'callMethod2');
  //   component.factor = null;    
  //   component.loadData();     // should execute else part
  //   expect(spy).toHaveBeenCalled();
  // })
  // it('should call method1  if factor exist', () => {
  //   const spy =  spyOn(component, 'callMethod1');
  //   component.factor = 'Your mock data goes here'
  //   component.loadData();       // should execute if part
  //   expect(spy).toHaveBeenCalled();
  // })

  // it('should call method2 if factor not exist', () =>{
  //   const spy =  spyOn(component, 'callMethod2');
  //   component.factor = null;    
  //   component.loadData();     // should execute else part
  //   expect(spy).toHaveBeenCalled();
  // })
});
