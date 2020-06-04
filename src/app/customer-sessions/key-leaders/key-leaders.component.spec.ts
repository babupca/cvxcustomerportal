import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyLeadersComponent } from './key-leaders.component';

describe('KeyLeadersComponent', () => {
  let component: KeyLeadersComponent;
  let fixture: ComponentFixture<KeyLeadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyLeadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
