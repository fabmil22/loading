import { InterestedPeopleComponent } from './interested-people.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interestedRouter } from './interested-people.routing';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  imports: [
    CommonModule,
    interestedRouter,
    MatButtonModule, MatCheckboxModule,
    MatTabsModule

  ],
  declarations: [ InterestedPeopleComponent ],
  exports: [  MatButtonModule, MatCheckboxModule, MatTabsModule ],
})
export class InterestedPeopleModule { }
