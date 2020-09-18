import { Injectable } from '@angular/core';
import { JobVO, Reader, Writer } from '../JobVO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Root} from '../common/constant';
@Injectable({
  providedIn: 'root'
})
export class ReaderServiceService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };


  getReaderList(): Reader[] {

    const api = `${Root}/listAllReader`;
    // const api = 'http://ruby.utools.club/listAllReader';
    // const api = 'http://localhost:8848/listAllReader';
    var readerList: Reader[] = [];
    this.http.get(api, this.httpOptions).subscribe(res => {
      if ((res as any).data instanceof Array) {
        for (let job of (res as any).data) {
          var b: Reader = new Reader();
          Object.assign(b, job);
          readerList.push(JSON.parse(JSON.stringify(b)));
        }
      }
      localStorage.setItem("readerList", JSON.stringify(readerList));
    })
    return readerList;
  }


  createOneReader(reader: Reader): void {
    const api = `${Root}/addReader`;
    reader = new Reader();
    this.http.post(api, JSON.stringify(reader), this.httpOptions).subscribe(res => {
      console.log(res);
    });
  }
}
