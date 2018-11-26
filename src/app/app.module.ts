import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AppRoutesModule }     from './app-routes.module';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TopbarComponent } from './shared/topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
