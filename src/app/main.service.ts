import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }
  headers= new HttpHeaders()
  .set('x-rapidapi-key', "SIGN-UP-FOR-KEY")
  .set('x-rapidapi-host', 'asos2.p.rapidapi.com');
  
  

  

  getProductList() : Observable<any>{
    // let params1 = new HttpParams();
    // params1 =  params1.append("store", "US");
    // params1 =  params1.append("offset", "0");
    // params1 =  params1.append("limit", "48");
    // params1 =  params1.append("categoryId", "4209");
    // params1 =  params1.append("country", "US");
    // params1 =  params1.append("sort","freshness");
    // params1 =  params1.append("currency","USD");
    // params1 =  params1.append("sizeSchema", "US");
    // params1 =  params1.append("lang", "en-US");
      return this.http.get<any>('https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US',{ 'headers': this.headers});
  }
}
