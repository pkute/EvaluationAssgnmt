import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { ShortNumberPipe } from './shortnumber.pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';
import { SafePipe } from './safe.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    HeaderComponent,
    MyPostsComponent,
    ShortNumberPipe,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FilterPipeModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
