import { Component, OnInit, Input } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { InMemoryDataService } from '../app.inmemory-data-service';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css'],
})
export class DownloadComponent implements OnInit {
  @Input() showDownload = false;
  fileUrl: string;
  blobContent: string = '';
  fileName = 'shashitest.csv';
  message = "";

  constructor(private inmemorydataservice: InMemoryDataService) {
    this.fileUrl = '';
  }
  //api/files/download
  ngOnInit(): void {}
  ondownload() {
    this.message = "File downloaded successfully";
    this.inmemorydataservice.downloadFile(this.fileName).subscribe((response) => {                           //Next callback
      console.log('response received')
      console.log(response);
    },
    (error) => {                              //Error callback
      if(error.status == HttpStatusCode.Ok){
        this.download(error.error.text,this.fileName);
      }
      else {
        console.log(error);
        throw error; 
      }      
    }
    );
  }
  download(data: any, filename:string) {
    const blob = new Blob([data], { type: 'text/csv'});
    const url= window.URL.createObjectURL(blob);
    var downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = filename;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    // window.open(url);
  }
}
