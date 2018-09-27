import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupStatComponent } from './signup-stat.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SignupStatComponent', () => {
  let component: SignupStatComponent;
  let fixture: ComponentFixture<SignupStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupStatComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
