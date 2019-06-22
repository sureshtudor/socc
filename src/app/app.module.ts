import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InvitationFormComponent } from './search/invitation-form/invitation-form.component';
import { NameFormComponent } from './search/name-form/name-form.component';
import { PhoneFormComponent } from './search/phone-form/phone-form.component';

import { SortableHeader } from './search/result-table/sortable-header.directive';
import { ResultTableComponent } from './search/result-table/result-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    InvitationFormComponent,
    NameFormComponent,
    PhoneFormComponent,
    ResultTableComponent,
    SortableHeader
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
