import { AdComponent } from './ad/ad.component';
import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RocketComponent } from './rocket/rocket.component';
import { TourComponent } from './tour/tour.component';
import { SidenavComponent } from './sidenav/sidenav.component';


export const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {path:'main',component:MainComponent},
   {path:'ad',component:AdComponent},
       {path:'rocket',component:RocketComponent},
  {path:'tour',component:TourComponent},
    {path:'sidenav',component:SidenavComponent},

    //   {path:'main',component:MainComponent},
    //     {path:'main',component:MainComponent},

];
