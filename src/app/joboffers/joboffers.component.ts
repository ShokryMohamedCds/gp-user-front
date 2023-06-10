import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-joboffers',
  templateUrl: './joboffers.component.html',
  styleUrls: ['./joboffers.component.css'],
})
export class JoboffersComponent implements OnInit {
  constructor(private http: HttpClient, private company: CompanyService) {}
  displayedColumns: string[] = [
    'offerContent',
    'offerType',
    'offerAcceptance',
    'companyName',
    'actions',
  ];
  offers: any[] = [];
  ngOnInit(): void {
    this.fetchJobOffers();
  }
  fetchJobOffers(): void {
    this.company.getJobOffers().subscribe(
      (response) => {
        // Handle the successful response
        console.log(response);
        this.offers = response.data;
        console.log(this.offers);
      },
      (error) => {
        // Handle the error
        console.error(error);
      }
    );
  }
  acceptOffer(offer: any): void {
    // Implement the logic to accept the offer
    console.log('Accept offer:', offer);
    this.company.Accept(offer).subscribe(
      (response) => {
        console.log('Accept offer API Response:', response);
        Swal.fire('Good job!', 'Offer Accepted Successfully', 'success');
        // Handle the response as needed
      },
      (error) => {
        console.error('Accept offer API Error:', error);
        // Handle the error as needed
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong while accepting this offer!',
        });
      }
    );
  }

  rejectOffer(offer: any): void {
    // Implement the logic to reject the offer
    console.log('Reject offer:', offer);
    this.company.Reject(offer).subscribe(
      (response) => {
        console.log('Accept offer API Response:', response);
        // Handle the response as needed
        Swal.fire('Good job!', 'Offer Rejected Successfully', 'success');
      },
      (error) => {
        console.error('Accept offer API Error:', error);
        // Handle the error as needed
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong while rejecting this offer!',
        });
      }
    );
  }
}
