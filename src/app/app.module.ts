import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProcessComponent } from './process/process.component';
//import { DownloadComponent } from './download/download.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';

const routes: Routes = [
  {
    path: 'file-upload',
    component: FileUploadComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    ProcessComponent,
    NavbarComponent,
    TeamComponent,
    HomeComponent,
    PresentationComponent,
    // DownloadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
