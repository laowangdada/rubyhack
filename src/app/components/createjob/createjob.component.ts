import { Component, OnInit } from '@angular/core';
import { JobVO } from 'src/app/JobVO';
import { GetjobmsgService } from 'src/app/services/getjobmsg.service';

@Component({
  selector: 'app-createjob',
  templateUrl: './createjob.component.html',
  styleUrls: ['./createjob.component.css']
})
export class CreatejobComponent implements OnInit {

  constructor(private jobService:GetjobmsgService) { }
  public newJob: JobVO;

  ngOnInit(): void {

  }


  createOneJob(): void {
    this.jobService.createOneJob(this.newJob);
  }

}
