import { Component } from '@angular/core';
import { JobVO, Reader } from './JobVO';
import { GetjobmsgService } from './services/getjobmsg.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReaderServiceService } from './services/reader-service.service';
import { ObjectClass } from './ObjectClass';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public jobList: JobVO[];
  objClass: ObjectClass;
  isCollapsed = false;
  constructor(private getService: GetjobmsgService, private http: HttpClient, private readerService: ReaderServiceService, private router: Router) {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.jobList = this.getService.getJobsList();
    this.objClass = new ObjectClass();
  }

  createJob(): void {
    var reader = new Reader();
    this.readerService.createOneReader(reader);
    this.router.navigate(['/create']);
    var audio = new Audio('assets/whoosh.mp3');
    audio.play();
    // console.log("**create*");
  }

  httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };
  postMessage(): void {
    const api = `localhost:8088/hello`;
    this.http.post<ObjectClass>(api, this.objClass, this.httpOptions).subscribe(res => {
      console.log(res);
    });
  }
}
