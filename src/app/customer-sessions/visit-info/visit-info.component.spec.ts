import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitInfoComponent } from './visit-info.component';

describe('VisitInfoComponent', () => {
  let component: VisitInfoComponent;
  let fixture: ComponentFixture<VisitInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
