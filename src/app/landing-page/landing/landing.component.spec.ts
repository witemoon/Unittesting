import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import { LandCnt01Component } from '../land-cnt-01/land-cnt-01.component';
import { LandHeroComponent } from '../land-hero/land-hero.component';
import { LandHeadComponent } from '../land-head/land-head.component';
import { LandCnt02Component } from '../land-cnt-02/land-cnt-02.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingComponent, LandHeroComponent, LandHeadComponent, LandCnt02Component, LandCnt01Component ],
      imports: [ RouterTestingModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
