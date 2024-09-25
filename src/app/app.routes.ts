import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';
import { ApiKeyComponent } from './api-key/api-key.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'api_key', component: ApiKeyComponent },
];
