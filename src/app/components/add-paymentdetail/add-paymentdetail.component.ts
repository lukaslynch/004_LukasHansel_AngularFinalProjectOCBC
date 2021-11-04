import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { PaymentDetail } from 'src/app/models/PaymentDetail';
import { PaymentdetailComponent } from '../paymentdetail/paymentdetail.component';

@Component({
  selector: 'app-add-paymentdetail',
  templateUrl: './add-paymentdetail.component.html',
  styleUrls: ['./add-paymentdetail.component.css']
})
export class AddPaymentdetailComponent implements OnInit {
  errorsCardOwnerName= { cardOwnerName: {} }
  errorscardNumber= { cardNumber: {} }
  errorssecurityCode= { securityCode: {} }
  errorsexpirationDate= { expirationDate: {} }
  form = {
    inputData: new FormGroup({
      cardOwnerName: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      cardNumber: new FormControl('',[
        Validators.required,
        Validators.minLength(12),
        Validators.pattern("^([0-9]*)$")
      ]),
      securityCode: new FormControl('',[
        Validators.required,Validators.minLength(3),
        Validators.maxLength(3),
        Validators.pattern("^([0-9]*)$")
      ]),
      expirationDate: new FormControl('',[
        Validators.required,Validators.minLength(5),
        Validators.maxLength(5),
        Validators.pattern("^(0[1-9]|1[0-2])\/?([0-9]{2})$")
      ]),
    })
  }

  constructor(public AuthService: AuthService, private PaymentDetail: PaymentdetailComponent) { 
    
  }

  get cardOwnerName(){
    return this.form.inputData.get('cardOwnerName')
  }

  get cardNumber(){
    return this.form.inputData.get('cardNumber')
  }

  get securityCode(){
    return this.form.inputData.get('securityCode')
  }

  get expirationDate(){
    return this.form.inputData.get('expirationDate')
  }

  addPaymentDetail(){
    this.AuthService.addPaymentDetail(this.form.inputData.value)
    .subscribe((res) => {
      if(res){
        this.form.inputData.reset()
        this.PaymentDetail.ngOnInit()
      }
    })
  }

  validateForm(){
    if(this.cardOwnerName?.invalid ||
      this.cardNumber?.invalid ||
      this.securityCode?.invalid ||
      this.expirationDate?.invalid){
        this.errorsCardOwnerName.cardOwnerName = {...this.cardOwnerName?.errors}
        this.errorscardNumber.cardNumber = {...this.cardNumber?.errors}
        this.errorssecurityCode.securityCode = {...this.securityCode?.errors}
        this.errorsexpirationDate.expirationDate = {...this.expirationDate?.errors}
      } else {
        this.addPaymentDetail();
        this.errorsCardOwnerName.cardOwnerName = {};
        this.errorscardNumber.cardNumber = {};
        this.errorssecurityCode.securityCode = {};
        this.errorsexpirationDate.expirationDate = {};
        this.isSubmitted = false;
      }
  }

  isSubmitted = false

  handlePaymentRegisterForm(){
    if(confirm(`Are you sure want to add ?`)){
      this.isSubmitted = true
      this.validateForm()
    }
  }

  handleIsSubmittedState () {
    if(this.isSubmitted == true){
      this.isSubmitted = false;
    }
  }

  ngOnInit(): void {
  }
  
}
