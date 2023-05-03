import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProcessComponent } from './process/process.component';
import { DownloadComponent } from './download/download.component';
const routes: Routes = [
  { path: '', redirectTo: 'file-upload', pathMatch: 'full' },
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'process', component: ProcessComponent },
  { path: 'download', component: DownloadComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
