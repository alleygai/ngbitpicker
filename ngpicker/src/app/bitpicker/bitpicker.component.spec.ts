import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitpickerComponent } from './bitpicker.component';

describe('BitpickerComponent', () => {
  let component: BitpickerComponent;
  let fixture: ComponentFixture<BitpickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitpickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
