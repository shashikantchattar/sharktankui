import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProcessComponent } from './process/process.component';
import { DownloadComponent } from './download/download.component';
import { Routes } from '@angular/router';
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
    DownloadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
