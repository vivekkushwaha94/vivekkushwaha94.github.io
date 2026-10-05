
import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Viewmywork } from './viewmywork/viewmywork';
import { Dowloalresume } from './dowloalresume/dowloalresume';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },

  {
    path: 'Home',
    component: Home
  },
  

  {
    path: 'Contact',
    component: Contact
  },

  {
    path: 'About',
    component: About
  },
  
  {
    path:'Viewmywork',
    component: Viewmywork
  },
  {
    path:'Dowloalresume',
    component: Dowloalresume
  }
  

];