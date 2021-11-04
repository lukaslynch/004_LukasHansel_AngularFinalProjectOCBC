import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentDetail } from 'src/app/models/PaymentDetail';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-paymentdetail',
  templateUrl: './paymentdetail.component.html',
  styleUrls: ['./paymentdetail.component.css']
})
export class PaymentdetailComponent implements OnInit {
  paydetails:PaymentDetail[] = []
  id: number
  constructor(public authService: AuthService, public router:Router, private actRoute: ActivatedRoute) { 
    this.id = actRoute.snapshot.params.id
  }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.authService.getPaymentDetail().subscribe(res => {
      this.paydetails = res
    })
  }

  deletePaymentDetail(id:number){
    if(confirm(`Are you sure want to delete id: ${id} ?`))
    {
      this.authService.deletePaymentDetail(id).subscribe((res) => {
        this.getData()
      })
    }
    
  }

}
