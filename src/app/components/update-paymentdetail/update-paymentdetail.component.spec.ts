import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaymentdetailComponent } from './update-paymentdetail.component';

describe('UpdatePaymentdetailComponent', () => {
  let component: UpdatePaymentdetailComponent;
  let fixture: ComponentFixture<UpdatePaymentdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePaymentdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePaymentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
