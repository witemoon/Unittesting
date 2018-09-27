import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignthankComponent } from './signthank.component';
import { RouterTestingModule } from '@angular/router/testing';
 
describe('SignthankComponent', () => {
  let component: SignthankComponent;
  let fixture: ComponentFixture<SignthankComponent>;
  let mockRouter;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignthankComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };
    fixture = TestBed.createComponent(SignthankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.temp();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
  });
});
