import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { ClientComponent } from './components/client/client.component';
import { DataService} from './services/data.service';
import { ScheduleService } from './services/schedule.service';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { AddClientFormComponent } from './components/add-client-form/add-client-form.component';
import { HigtlightDirective } from './directives/higtlight.directive';
import { ToggleDirective } from './directives/toggle.directive';


@NgModule({
  declarations: [
    AppComponent,
    ClientsListComponent,
    ClientComponent,
    ScheduleComponent,
    AddClientFormComponent,
    HigtlightDirective,
    ToggleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService, ScheduleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
