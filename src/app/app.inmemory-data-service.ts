import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class InMemoryDataService implements InMemoryDbService {
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
