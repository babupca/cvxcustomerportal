import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBannerComponent } from './customer-banner.component';

describe('CustomerBannerComponent', () => {
  let component: CustomerBannerComponent;
  let fixture: ComponentFixture<CustomerBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
