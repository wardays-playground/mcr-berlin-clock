import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockComponent } from './clock.component';

describe('ClockComponent', () => {
  let component: ClockComponent;
  let fixture: ComponentFixture<ClockComponent>;
  const hourTest = 11;
  const minTest = 33;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should create HTML row0', () => {
    
    let result = component.translateSeconds(1);

    expect(result).toEqual(jasmine.any(String));
  });

  it('Should create HTML row0', () => {
    
    let result = component.translateSeconds(0);

    expect(result).toEqual(jasmine.any(String));
  });

  it('Should create HTML row1', () => {
    
    let result = component.translateFiveHour(2);

    expect(result).toEqual(jasmine.any(String));
  });

  it('Should create HTML row2', () => {
    
    let result = component.translateOneHour(4);

    expect(result).toEqual(jasmine.any(String));
  });

  it('Should create HTML row3', () => {
    
    let result = component.translateFiveMinutes(6);

    expect(result).toEqual(jasmine.any(String));
  });

  it('Should create HTML row4', () => {
    
    let result = component.translateOneMinutes(8);

    expect(result).toEqual(jasmine.any(String));
  });

  it('Should return row1 time', () => {
    
    let result = component.getHoursRow1(hourTest);

    expect(result).toEqual(2);
  });

  it('Should return row2 time', () => {

    component.getHoursRow1(hourTest);
    let result = component.getHoursRow2(hourTest);

    expect(result).toEqual(1);
  });

  it('Should return row3 time', () => {
    
    let result = component.getMinutesRow3(minTest);

    expect(result).toEqual(6);
  });

  it('Should return row4 time', () => {
    
    component.getMinutesRow3(minTest);
    let result = component.getMinutesRow4(minTest);

    expect(result).toEqual(3);
  });

  it('Should return complete time', () => {
    
    let result = component.calculateTime('11:33');

    //expect(result).toEqual(4);
  });

  it("should call alert", () => {
    spyOn(window, 'alert');
    component.calculateTime('');
    expect(window.alert).toHaveBeenCalledWith('Input time');
 });  

});
