import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandCnt02Component } from './land-cnt-02.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LandCnt02Component', () => {
  let component: LandCnt02Component;
  let fixture: ComponentFixture<LandCnt02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandCnt02Component ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandCnt02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
