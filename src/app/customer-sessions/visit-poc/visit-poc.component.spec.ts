import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitPocComponent } from './visit-poc.component';

describe('VisitPocComponent', () => {
  let component: VisitPocComponent;
  let fixture: ComponentFixture<VisitPocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitPocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
