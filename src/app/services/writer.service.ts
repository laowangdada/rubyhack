import { Injectable } from '@angular/core';
import { JobVO, Reader, Writer } from '../JobVO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Root } from '../common/constant';
@Injectable({
  providedIn: 'root'
})
export class WriterService {


  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };
  getWriterList(): Writer[] {
    const api = `${Root}/listAllWtiter`;
    var writerList: Writer[] = [];
    this.http.get(api, this.httpOptions).subscribe(res => {
      if ((res as any).data instanceof Array) {
        for (let job of (res as any).data) {
          var b: Writer = new Writer();
          Object.assign(b, job);
          writerList.push(JSON.parse(JSON.stringify(b)));
        }
      }
      localStorage.setItem("writerList", JSON.stringify(writerList));
    })
    return writerList;
  }


  createOneWriter(reader: Writer): void {
    const api = `${Root}/addWriter`;
    reader = new Writer();
    this.http.post(api, JSON.stringify(reader), this.httpOptions).subscribe(res => {
      console.log(res);
    });
  }
}
