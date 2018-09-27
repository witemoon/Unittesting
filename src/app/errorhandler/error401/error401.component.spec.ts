import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Error401Component } from './error401.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Error401Component', () => {
  let component: Error401Component;
  let fixture: ComponentFixture<Error401Component>;
  let mockRouter;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Error401Component ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockRouter ={ navigate: jasmine.createSpy('navigate')};
    fixture = TestBed.createComponent(Error401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create loginclick', () => {
    // expect(component).toBeTruthy();
    component.loginclick();
    expect (mockRouter.navigate).toHaveBeenCalledWith (['/user/signin']);
  });
});
