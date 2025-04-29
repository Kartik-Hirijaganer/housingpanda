import { Routes } from '@angular/router';
import { AddListingComponent } from './add-listing/add-listing.component';
import { ViewListingsComponent } from './view-listings/view-listings.component';

export const routes: Routes = [
  { path: '', component: ViewListingsComponent },
  { path: 'add-listing', component: AddListingComponent },
  { path: 'view-listings', component: ViewListingsComponent }
];

