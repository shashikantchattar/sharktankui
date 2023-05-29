import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor(private http: HttpClient) {}
  createDb() {
    // const files = [
    //   { id: 1, name: 'file1.txt', size: 1024 },
    //   { id: 2, name: 'file2.txt', size: 2048 },
    //   { id: 3, name: 'file3.txt', size: 3072 },
    // ];
    const message = '';
    return { message };
  }

  post(RequestInfo: any) {
    if (RequestInfo.url.endsWith('/upload')) {
      return RequestInfo.utils.createResponse$(() => {
        return {
          status: 200,
          body: { message: 'File uploaded successfully.' },
        };
      });
    }
    return undefined;
  }
  uploadFile(fd: any) {
    const headers = new HttpHeaders();
    headers.append('Secret-Key', 'BB1BmDOMLqUEGcP1LDsLTkiSN5MUs4JhAJ4scpC');
    headers.append('Access-Key', 'AKIA3LNP7LXEGNPSPO5U');
    headers.append('Authentication-Type', 'AWS');
    headers.append('AWS-Region', 'ap-southeast-1');
    // const headers = new HttpHeaders({
    //   Authorization:
    //     'AWS4-HMAC-SHA256 Credential=AKIA3LNP7LXEGNPSPO5U/YYYYMMDD/ap-southeast-1/execute-api/aws4_request, SignedHeaders=host;x-amz-date, Signature=<Signature>',
    // });
    this.http
      .put<any>(
        'https://4c6q152v3i.execute-api.ap-southeast-1.amazonaws.com/dev/sharktank-files-220523/input/test1.csv',
        fd,

        { headers }
      )
      .subscribe((res) => {
        return res;
      });
  }
  get(RequestInfo: any) {
    if (RequestInfo.url.endsWith('/process')) {
      return RequestInfo.utils.createResponse$(() => {
        return {
          status: 200,
          body: { message: 'File processed successfully.' },
        };
      });
    } else if (RequestInfo.url.endsWith('/download')) {
      return RequestInfo.utils.createResponse$(() => {
        return {
          status: 200,
          body: new Blob(['Hello, world!'], { type: 'text/plain' }),
        };
      });
    }
    return undefined;
  }
}
