import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
  Inject,
} from '@angular/core';
import { Router } from '@angular/router';
import * as Papa from 'papaparse';
import { InMemoryDataService } from '../app.inmemory-data-service';
import { HttpStatusCode } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  [x: string]: any;
  // @Output() uploadedFile = new EventEmitter<File>();
  @Input() showProcess = true;
  selectedFile: any;
  message: any;
  fileContent: any;
  tableData: any[] = [];
  processbutton: boolean = false;
  showTable = true;
  showCross = false;
  fd = new FormData();
  fileName = '';
  fileUrl: string;
  blobContent: string = '';
  fileName1 = 'shashitest.csv';

  constructor(
    private router: Router,
    private inmemorydataservice: InMemoryDataService,
    private spinner: NgxSpinnerService
  ) {
    this.fileUrl = '';
  }

  toggleTableVisibility() {
    this.showTable = !this.showTable;
    this.showCross = false;
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.processbutton = false;
    const reader = new FileReader();
    reader.readAsText(this.selectedFile);
    reader.onload = () => {
      this.fileContent = reader.result as string;
      const parsedData = Papa.parse(this.fileContent).data;
      this.tableData = parsedData;
    };
    // this.uploadedFile.emit(event.item(0));
    //api/files/upload
  }
  ngOnInit(): void {}
  onUpload() {
    this.processbutton = true;
    this.showProcess = true;

    // const headers = new HttpHeaders({
    //   Authorization:
    //     'AWS4-HMAC-SHA256 Credential=AKIA3LNP7LXEGNPSPO5U/YYYYMMDD/ap-southeast-1/execute-api/aws4_request, SignedHeaders=host;x-amz-date, Signature=<Signature>',
    // });
    if (this.selectedFile) {
      this.fileName = this.selectedFile.name;
      // const formData = new FormData();
      // this.fd.append(this.fileName, this.selectedFile);

      this.inmemorydataservice.uploadFile(this.fileName, this.selectedFile);
      this.message = 'File uploaded successfully.';
    }
  }
  onCancel() {
    var a = document.getElementById('fileClear') as HTMLInputElement;
    a.value = '';
    this.selectedFile = null;
    this.message = null;
    this.tableData = [];
  }
  onProcess() {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
    // this.router.navigate(['/process']);
  }
  ondownload() {
    this.message = 'File downloaded successfully';
    this.inmemorydataservice.downloadFile(this.fileName1).subscribe(
      (response) => {
        //Next callback
        console.log('response received');
        console.log(response);
      },
      (error) => {
        //Error callback
        if (error.status == HttpStatusCode.Ok) {
          this.download(error.error.text, this.fileName1);
        } else {
          console.log(error);
          throw error;
        }
      }
    );
  }
  download(data: any, filename: string) {
    const blob = new Blob([data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    var downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = filename;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    // window.open(url);
  }
}
