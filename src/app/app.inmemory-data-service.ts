import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService{
  constructor(private http: HttpClient) {}
  // constructor() {}
  createDb() {
    // const files = [
    //   { id: 1, name: 'file1.txt', size: 1024 },
    //   { id: 2, name: 'file2.txt', size: 2048 },
    //   { id: 3, name: 'file3.txt', size: 3072 },
    // ];
    const message = '';
    return { message };
  }

  // post(RequestInfo: any) {
  //   if (RequestInfo.url.endsWith('/upload')) {
  //     return RequestInfo.utils.createResponse$(() => {
  //       return {
  //         status: 200,
  //         body: { message: 'File uploaded successfully.' },
  //       };
  //     });
  //   }
  //   return undefined;
  // }
  uploadFile(filename: String, file: any) {
    const headers = new HttpHeaders({
      Authorization:
        'AWS AKIA3LNP7LXEGNPSPO5U:BB1BmDOMLqUEGcP1LDsLTkiSN5MUs4JhAJ4scpC',
    });
    this.http
      .put<any>(
        'https://4c6q152v3i.execute-api.ap-southeast-1.amazonaws.com/dev/sharktank-files-220523/input/'+filename,
        file,
        { headers }
      )
      .subscribe((res) => {
        // console.log(res);
        return res;
      });
  }
  downloadFile(filename: String) {
    console.log("File Download");
    let headers = new HttpHeaders({
      Authorization:
        'AWS AKIA3LNP7LXEGNPSPO5U:BB1BmDOMLqUEGcP1LDsLTkiSN5MUs4JhAJ4scpC',responseType: 'text' as const 
        
    });
    return this.http.get<any>('https://4c6q152v3i.execute-api.ap-southeast-1.amazonaws.com/dev/sharktank-files-220523/input/'
    +filename,
    { headers});
    // this.http
    //   .get<any>(
    //     'https://4c6q152v3i.execute-api.ap-southeast-1.amazonaws.com/dev/sharktank-files-220523/input/'+filename,
    //     { headers}
    //   )
    //   .subscribe((res) => {
    //     console.log(res);
    //     return res;
    //   });
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
