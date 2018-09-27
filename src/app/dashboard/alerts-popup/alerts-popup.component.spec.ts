import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsPopupComponent } from './alerts-popup.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AlertsPopupComponent', () => {
  let component: AlertsPopupComponent;
  let fixture: ComponentFixture<AlertsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertsPopupComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create closeButtonClicked', () => {
    component.closeButtonClicked();
    // expect(AlertsPopupComponent).toBeTruthy('false');
  });
});
