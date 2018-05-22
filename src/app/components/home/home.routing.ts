import { HomeComponent } from './home.component';

import { Routes , RouterModule } from '@angular/router';


const HOME_ROUTER: Routes = [
  {path: '',  component: HomeComponent}
];

export  const HomeRouter = RouterModule.forChild(HOME_ROUTER);
