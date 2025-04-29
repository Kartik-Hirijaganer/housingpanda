import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-listing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-listing.component.html',
  styleUrl: './add-listing.component.css'
})
export class AddListingComponent {
  listing = {
    title: '',
    description: '',
    rent: null,
    address: '',
    numRooms: null,
    contactInfo: ''
  };

  constructor(private http: HttpClient, private router: Router) { }

  showForm = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onSubmit() {
    const apiUrl = 'http://localhost:5000/listings/add';

    this.http.post(apiUrl, this.listing).subscribe({
      next: (res) => {
        alert('Listing submitted successfully!');
        this.resetForm();
        this.router.navigate(['/view-listings']);
      },
      error: (err) => {
        console.error('Error submitting listing:', err?.error?.message);
        alert(`${err?.error?.message}`);
      }
    });
  }

  resetForm() {
    this.listing = {
      title: '',
      description: '',
      rent: null,
      address: '',
      numRooms: null,
      contactInfo: ''
    };
  }
}
