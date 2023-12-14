import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdwinComponent } from './components/adwin/adwin.component';
import { QimonComponent } from './components/qimon/qimon.component';
import { RickyComponent } from './components/ricky/ricky.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'adwin', component: AdwinComponent },
  { path: 'qimon', component: QimonComponent },
  { path: 'ricky', component: RickyComponent },
  { path: '**', component: NotfoundComponent },
];
