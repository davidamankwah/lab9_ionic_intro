import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnaughtPageRoutingModule } from './connaught-routing.module';

import { ConnaughtPage } from './connaught.page';

//import this page from connaughtcounties to embed
import {ConnaughtcountiesPageModule} from '../connaughtcounties/connaughtcounties.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnaughtPageRoutingModule,
    ConnaughtcountiesPageModule //need to include this part of code to emded to let this page know about the other page
  ],
  declarations: [ConnaughtPage]
})
export class ConnaughtPageModule {}
