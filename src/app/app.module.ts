import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule} from './app-routing.module'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { RepositoriesComponent } from './repositories/repositories.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchComponent } from './search/search.component';
import {SearchRequestService} from '../app/search-request-service.service';
import { NavbarComponent } from './navbar/navbar.component';
import { from } from 'rxjs';
import { OnHoverDirective } from './on-hover.directive';
import { DateCountPipe } from './date-count.pipe';
@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    SearchFormComponent,
    SearchComponent,
    NavbarComponent,
    OnHoverDirective,
    DateCountPipe
  

  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SearchRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule { }

