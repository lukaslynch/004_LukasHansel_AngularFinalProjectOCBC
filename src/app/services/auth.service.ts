import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { PaymentDetail } from '../models/PaymentDetail';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint:string = 'https://finalproject1ocbcwithoutjwt.herokuapp.com/'

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http:HttpClient) { }

  handleError(error: HttpErrorResponse){
    let msg = '';
    if(error.error instanceof ErrorEvent){
      msg = error.error.message;
    }else{
      msg = `Error Code: ${error.status}\n Message: ${error.message}`;
    }
    alert(msg)
    return throwError(msg)
  }

  addPaymentDetail(paydetail: PaymentDetail): Observable<any>{
    const api = `${this.endpoint}api/paymentdetail`;
    return this.http.post(api, paydetail).pipe( catchError(this.handleError))
  }

  getPaymentDetail(): Observable<any>{
    const api = `${this.endpoint}api/paymentdetail`;
    return this.http.get(api).pipe(
      map((res:any) => {
        return res || {}
      }), catchError(this.handleError)
    )
  }

  getPaymentDetailById(id:number): Observable<any>{
    const api = `${this.endpoint}api/paymentdetail/${id}`;
    return this.http.get(api).pipe(
      map((res:any) => {
        return res || {}
      }), catchError(this.handleError)
    )
  }

  updatePaymentDetail(paydetail: PaymentDetail, id: number): Observable<any>{
    const api = `${this.endpoint}api/paymentdetail/${id}`
    console.log(paydetail)
    return this.http.put(api, paydetail)
  }

  deletePaymentDetail(id:number): Observable<any>{
    const api = `${this.endpoint}api/paymentdetail/${id}`;
    alert("Data telah dihapus")
    return this.http.delete(api, {
      headers: new HttpHeaders({ 'Content-type': 'application/json'})
    })
  }

}
