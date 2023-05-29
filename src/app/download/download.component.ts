import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css'],
})
export class DownloadComponent implements OnInit {
  @Input() showDownload = false;
  fileUrl: string;
  blobContent: string = '';
  fileName = 'Hanuma';

  constructor(private http: HttpClient) {
    this.fileUrl = '';
  }
  //api/files/download
  ngOnInit(): void {}
  ondownload() {
    alert('download is also working');
    this.http
      .get(
        'https://4c6q152v3i.execute-api.ap-southeast-1.amazonaws.com/dev/sharktank-files-220523/input/testfile.csv',
        { responseType: 'blob' }
      )
      .subscribe((blob: Blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.blobContent = reader.result as string;
        };
        reader.readAsText(blob);
        // Create a blob URL for the downloaded file
        //this.fileUrl = URL.createObjectURL(blob);
        const url = window.URL.createObjectURL(blob);
        window.open(url);
        console.log(blob.text);
      });
  }
}
