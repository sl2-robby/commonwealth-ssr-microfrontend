import { Route } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { AboutComponent } from '../views/about/about.component';
import { FaqComponent } from '../views/faq/faq.component';
import { ContactComponent } from '../views/contact/contact.component';

export const remoteRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'faq', component: FaqComponent},
  { path: 'contact-us', component: ContactComponent },
];
