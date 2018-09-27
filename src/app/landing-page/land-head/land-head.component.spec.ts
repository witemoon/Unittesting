import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandHeadComponent } from './land-head.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('LandHeadComponent', () => {
  let Router = {
    navigate: jasmine.createSpy('navigate')
  };
  let component: LandHeadComponent;
  let fixture: ComponentFixture<LandHeadComponent>;
  let mockRouter;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandHeadComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: Router, useValue: Router },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockRouter ={ navigate: jasmine.createSpy('navigate')};
    fixture = TestBed.createComponent(LandHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create signup', () => {
    // expect(component).toBeTruthy();
    component.signUp();
    expect (mockRouter.navigate).toHaveBeenCalledWith (['/user/signup']);
  });
  it('should create signup', () => {
    // expect(component).toBeTruthy();
    component.signIn();
    expect (mockRouter.navigate).toHaveBeenCalledWith (['/user/signin']);
  });
});
