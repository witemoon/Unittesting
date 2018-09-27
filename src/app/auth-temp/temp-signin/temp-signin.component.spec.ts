import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempSigninComponent } from './temp-signin.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../shared/auth.service';
import { BackEndInterceptorService } from '../../shared/back-end-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from '../../shared/shared';

describe('TempSigninComponent', () => {
  let component: TempSigninComponent;
  let fixture: ComponentFixture<TempSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ AuthService, BackEndInterceptorService, SharedService ],
      declarations: [ TempSigninComponent ],
      imports: [ FormsModule, RouterTestingModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ngOnInit', () => {
    component.ngOnInit();
    expect(TempSigninComponent).toBeTruthy('false');
  });
});
