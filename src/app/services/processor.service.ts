import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JobVO, Processor, Reader, Writer } from '../JobVO';
import { Root } from '../common/constant';
@Injectable({
  providedIn: 'root'
})
export class ProcessorService {

  constructor(public http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };


  getprocessorList(): Processor[] {

    // const api = 'http://ruby.utools.club/listAllProcesser';
    const api = `${Root}/listAllProcesser`;
    // const api = 'http://localhost:8848/listAllProcesser';
    var processorList: Processor[] = [];
    this.http.get(api, this.httpOptions).subscribe(res => {
      if ((res as any).data instanceof Array) {
        for (let job of (res as any).data) {
          var b: Processor = new Processor();
          Object.assign(b, job);
          processorList.push(JSON.parse(JSON.stringify(b)));
        }
      }
      localStorage.setItem("processorList", JSON.stringify(processorList));
    })
    return processorList;
  }


  createOneReader(processor: Processor): void {
    const api = `${Root}/addReader`;
    processor = new Processor();
    this.http.post(api, JSON.stringify(processor), this.httpOptions).subscribe(res => {
      console.log(res);
    });
  }

}
