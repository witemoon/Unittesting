import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EppthankComponent } from './eppthank.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('EppthankComponent', () => {
  let component: EppthankComponent;
  let fixture: ComponentFixture<EppthankComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl', 'navigate']);
  // let mockRouter;
  let navigate;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EppthankComponent ],
      providers: [
        { provide: Router, useValue: routerSpy }, ],
      imports:[
        HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  }));
  

  beforeEach(() => {
    // routerSpy ={ navigate: jasmine.createSpy('navigate')};
    fixture = TestBed.createComponent(EppthankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Navigating to dashboard',async( () => {
    // expect(component).toBeTruthy();
    component.dboard();
    expect (routerSpy.navigate).toHaveBeenCalledWith (['/dashboard/home']);
  }));
});
