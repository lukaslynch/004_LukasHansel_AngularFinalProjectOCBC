import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentDetail } from 'src/app/models/PaymentDetail';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update-paymentdetail',
  templateUrl: './update-paymentdetail.component.html',
  styleUrls: ['./update-paymentdetail.component.css']
})
export class UpdatePaymentdetailComponent implements OnInit {
  paymentdetail_id: number
  pdet: PaymentDetail = {} as PaymentDetail

  errorsCardOwnerName= { cardOwnerName: {} }
  errorscardNumber= { cardNumber: {} }
  errorssecurityCode= { securityCode: {} }
  errorsexpirationDate= { expirationDate: {} }
  form = {
    updateData: new FormGroup({
      paymentDetailId: new FormControl('',[Validators.required]),
      cardOwnerName: new FormControl('',[Validators.required,Validators.minLength(2)]),
      cardNumber: new FormControl('',[Validators.required,Validators.minLength(12)]),
      securityCode: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(3)]),
      expirationDate: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(5)]),
    })
  }

  constructor(public AuthService:AuthService, public router:Router, private activatedRoute:ActivatedRoute) {
    this.paymentdetail_id = activatedRoute.snapshot.params.id
   }

   get cardOwnerName(){
    return this.form.updateData.get('cardOwnerName')
  }

  get cardNumber(){
    return this.form.updateData.get('cardNumber')
  }

  get securityCode(){
    return this.form.updateData.get('securityCode')
  }

  get expirationDate(){
    return this.form.updateData.get('expirationDate')
  }

  paymentDetailById(id:number){
    this.AuthService.getPaymentDetailById(id)
    .subscribe(e => {
      console.log(e, "<<<<getById")
      this.pdet = e
      //set value untuk edit form
      this.form.updateData.controls['paymentDetailId'].setValue(e.paymentDetailId)
      this.form.updateData.controls['cardOwnerName'].setValue(e.cardOwnerName)
      this.form.updateData.controls['cardNumber'].setValue(e.cardNumber)
      this.form.updateData.controls['securityCode'].setValue(e.securityCode)
      this.form.updateData.controls['expirationDate'].setValue(e.expirationDate)
    })
  }

  doUpdate(){
    console.log(this.paymentdetail_id)
    console.log(this.form.updateData.value)
    this.AuthService.updatePaymentDetail(this.form.updateData.value, this.paymentdetail_id)
    .subscribe((res) => {
      if(res){
        this.form.updateData.reset()
        this.router.navigate(['home'])
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
        this.doUpdate();
        this.errorsCardOwnerName.cardOwnerName = {};
        this.errorscardNumber.cardNumber = {};
        this.errorssecurityCode.securityCode = {};
        this.errorsexpirationDate.expirationDate = {};
        this.isSubmitted = false;
      }
  }

  isSubmitted = false

  handleUpdateForm(){
    this.isSubmitted = true
    this.validateForm()
  }

  handleIsSubmittedState () {
    if(this.isSubmitted == true){
      this.isSubmitted = false;
    }
  }

  ngOnInit(): void {
    this.paymentDetailById(this.paymentdetail_id)
  }

}
