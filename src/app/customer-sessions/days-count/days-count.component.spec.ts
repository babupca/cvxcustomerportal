import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysCountComponent } from './days-count.component';

describe('DaysCountComponent', () => {
  let component: DaysCountComponent;
  let fixture: ComponentFixture<DaysCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
