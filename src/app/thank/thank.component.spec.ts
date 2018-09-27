import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankComponent } from './thank.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('ThankComponent', () => {
  let component: ThankComponent;
  let fixture: ComponentFixture<ThankComponent>;
  let mockRouter;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankComponent ],
      imports: [ RouterTestingModule.withRoutes([]) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };
    fixture = TestBed.createComponent(ThankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.temp();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/changeTempPass']);
  });
});
