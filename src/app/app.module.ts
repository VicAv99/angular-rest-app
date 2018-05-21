import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';

import { ItemsService, WidgetsService } from './shared';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { HomeComponent } from './home/home.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';
import { WidgetsDetailComponent } from './widgets/widgets-detail/widgets-detail.component';
import { PeopleComponent } from './people/people.component';
import { PeopleService } from './shared/people.service';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { PeopleDetailComponent } from './people/people-detail/people-detail.component';
import { ItemsSearchComponent } from './items/items-search/items-search.component';
import { PeopleSearchComponent } from './people/people-search/people-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemDetailComponent,
    WidgetsComponent,
    WidgetsListComponent,
    WidgetsDetailComponent,
    PeopleComponent,
    PeopleListComponent,
    PeopleDetailComponent,
    ItemsSearchComponent,
    PeopleSearchComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [ItemsService, WidgetsService, PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
