import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app.inmemory-data-service';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProcessComponent } from './process/process.component';
import { DownloadComponent } from './download/download.component';

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
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
