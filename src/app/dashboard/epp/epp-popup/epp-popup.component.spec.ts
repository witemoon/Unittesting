import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventEmitter } from '@angular/core';
import { EppPopupComponent } from './epp-popup.component';

describe('EppPopupComponent', () => {
  let component: EppPopupComponent;
  let fixture: ComponentFixture<EppPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EppPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EppPopupComponent);
    component = fixture.componentInstance;
    // spyOn(component.EventEmitter,'emit');
    fixture.detectChanges();
  });

  it('should create addClicked', () => {
    // component.addButtonClicked();
    // expect(EppPopupComponent.EventEmitter.emit).toBeTruthy('data');
    const component = new EppPopupComponent();        
    spyOn(component.addClicked, 'emit');
    expect(component.addClicked.emit).toHaveBeenCalled();
  });
  it('should create closeButtonClicked', () => {
    // component.closeButtonClicked();
    // expect(EppPopupComponent).toBeTruthy('data');
    const component = new EppPopupComponent();        
    spyOn(component.closeClicked, 'emit');
    expect(component.closeClicked.emit).toHaveBeenCalled();
  });
  it('should create closeButtonClicked1', () => {
    // component.closeButtonClicked1();
    // expect(EppPopupComponent).toBeTruthy('data');
    const component = new EppPopupComponent();        
    spyOn(component.closeClicked1, 'emit');
    expect(component.closeClicked1.emit).toHaveBeenCalled();
  });
});
