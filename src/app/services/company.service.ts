import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}
  private get httpOptions(): { headers: HttpHeaders } {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${userData.token}`,
    });
    return { headers };
  }
  public search(searchquery: string): Observable<any> {
    const url = `http://localhost:8042/user/search`;
    return this.http.post(url, { search: searchquery });
  }
  public getCompany(id: string): Observable<any> {
    const url = `http://localhost:8042/company/company/${id}`;
    return this.http.get(url, this.httpOptions);
  }
  public follow(id: string): Observable<any> {
    const url = `http://localhost:8042/user/follow/${id}`;
    console.log(this.httpOptions);

    return this.http.post(url, '', this.httpOptions);
  }
  public getJobOffers(): Observable<any> {
    const url = `http://localhost:8042/user/recieveJobOffers`;
    return this.http.get(url, this.httpOptions);
  }
  public Accept(offer: any): Observable<any> {
    const url = `http://localhost:8042/user/setOfferState/${offer._id}`;
    console.log(this.httpOptions);

    return this.http.put(
      url,
      {
        offeracceptanc: 'Accepted',
      },
      this.httpOptions
    );
  }
  public Reject(offer: any): Observable<any> {
    const url = `http://localhost:8042/user/setOfferState/${offer._id}`;
    console.log(this.httpOptions);

    return this.http.put(
      url,
      {
        offeracceptanc: 'Rejected',
      },
      this.httpOptions
    );
  }
}
