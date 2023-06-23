import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProcessComponent } from './process/process.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
//import { DownloadComponent } from './download/download.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'fileUpload', component: FileUploadComponent },
  { path: 'process', component: ProcessComponent },
  { path: 'team', component: TeamComponent },
  // { path: 'download', component: DownloadComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
