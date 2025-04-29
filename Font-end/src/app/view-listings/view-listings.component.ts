import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-view-listings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-listings.component.html',
  styleUrl: './view-listings.component.css'
})
export class ViewListingsComponent {
  listings: any[] = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchListings();
  }

  fetchListings() {
    this.http.get<any[]>('http://localhost:5000/listings').subscribe({
      next: (data: any) => {
        this.listings = data.listings;
        console.log(data.listings);
      },
      error: (err) => {
        console.error('Error fetching listings:', err);
      }
    });
  }
}
