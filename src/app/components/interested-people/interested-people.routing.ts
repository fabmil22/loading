

import { InterestedPeopleComponent } from './interested-people.component';
import { Routes , RouterModule } from '@angular/router';


const INTERESTE_ROUTER: Routes = [
  {path: '',  component: InterestedPeopleComponent}
];

export  const interestedRouter = RouterModule.forChild(INTERESTE_ROUTER);
