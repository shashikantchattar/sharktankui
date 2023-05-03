import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  // @Output() uploadedFile = new EventEmitter<File>();
  @Input() showProcess = false;
  selectedFile: any;
  message: any;
  processbutton: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.processbutton = false;
    // this.uploadedFile.emit(event.item(0));
  }
  ngOnInit(): void {}
  onUpload() {
    this.processbutton = true;
    this.showProcess = true;
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post<any>('api/files/upload', fd).subscribe((res) => {
      this.router.navigate(['/process']);
      this.message = res.message;
    });
  }
  onCancel() {
    var a = document.getElementById('fileClear') as HTMLInputElement;
    a.value = '';
    this.selectedFile = null;
    this.message = null;
  }
}
