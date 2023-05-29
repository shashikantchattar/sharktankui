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

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  [x: string]: any;
  // @Output() uploadedFile = new EventEmitter<File>();
  @Input() showProcess = false;
  selectedFile: any;
  message: any;
  fileContent: any;
  tableData: any[] = [];
  processbutton: boolean = false;
  showTable = true;
  showCross = false;

  constructor(
    private router: Router,
    private inmemorydataservice: InMemoryDataService
  ) {}

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
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    this.inmemorydataservice.uploadFile(fd);
  }
  onCancel() {
    var a = document.getElementById('fileClear') as HTMLInputElement;
    a.value = '';
    this.selectedFile = null;
    this.message = null;
    this.tableData = [];
  }
}
