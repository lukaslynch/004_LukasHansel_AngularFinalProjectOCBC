import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentdetailComponent } from './add-paymentdetail.component';

describe('AddPaymentdetailComponent', () => {
  let component: AddPaymentdetailComponent;
  let fixture: ComponentFixture<AddPaymentdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPaymentdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPaymentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
