import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JobVO, Reader, Writer } from '../JobVO';
import { Root } from '../common/constant';
@Injectable({
  providedIn: 'root'
})
export class GetjobmsgService {
  constructor(public http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };
  getJobsList(): JobVO[] {
    console.log("getJobListRun !!!!");
    localStorage.clear();
    var jobList: JobVO[] = [];
    const api = `${Root}/listAllJob`;

    this.http.get(api, this.httpOptions).subscribe(res => {
      if ((res as any).data instanceof Array) {
        for (let job of (res as any).data) {
          var b: JobVO = new JobVO();
          Object.assign(b, job);
          jobList.push(JSON.parse(JSON.stringify(b)));
          localStorage.setItem(job.id, JSON.stringify(job));
        }
      }
    })
    return jobList;
  }

  getJobContent(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  updateJob(job: JobVO): void {
    // const api = 'http://localhost:8848/update';
    const api = `${Root}/update`;
    this.http.post(api, JSON.stringify(job), this.httpOptions).subscribe(res => {
      console.log(res);
    });
  }

  runOneJob(id: number): void {
    var audio = new Audio('../assets/whoosh.mp3');
    audio.play();
    // const api = 'http://ruby.utools.club/executeJob';
    const api = `${Root}/executeJob`;
    const url = `${api}/${id}`
    this.http.get(url).subscribe(res => {
      if ((res as any).code == 200) {
        alert("success");
      }
    });
  }

  createOneJob(job: JobVO): void {
    var audio = new Audio('assets/whoosh.mp3');
    audio.play();
    // const api = 'http://localhost:8848/addJob';
    const api = `${Root}/addJob`;
    this.http.post(api, JSON.stringify(job), this.httpOptions).subscribe(res => {

    });
  }

}
