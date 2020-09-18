import { Component, OnInit } from '@angular/core';
import { JobVO, Processor, Reader, Writer } from 'src/app/JobVO';
import { GetjobmsgService } from 'src/app/services/getjobmsg.service';
import { ActivatedRoute } from '@angular/router';
import { ReaderServiceService } from 'src/app/services/reader-service.service';
import { ProcessorService } from 'src/app/services/processor.service';
import { WriterService } from 'src/app/services/writer.service';


// import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {


  public jobContent: JobVO;

  public readerList: Reader[] = [];

  public processorList: Processor[] = [];

  public writerList: Writer[] = [];
  constructor(private getService: GetjobmsgService, private router: ActivatedRoute,
    private readerService: ReaderServiceService,
    private processorService: ProcessorService,
    private writerService: WriterService) { }

  ngOnInit(): void {
    this.router.params.subscribe(data => {
      this.jobContent = this.getService.getJobContent(data.jobId);
    })
    this.readerList = this.readerService.getReaderList();
    this.processorList = this.processorService.getprocessorList();
    this.writerList = this.writerService.getWriterList();
    // console.log("jobcomponent init");
    // console.log(this.jobContent);
    // console.log(this.readerList);
    // console.log(this.writerList);
    // console.log(this.processorList);
  }

  changeReader(readerId: number): void {
    var readerList: Reader[] = JSON.parse(localStorage.getItem('readerList'));
    readerList.forEach(item => {
      if (item.id == readerId) {
        this.jobContent.reader = item;
      }
    })
    // console.log(this.jobContent.reader);
  }

  changeProcessor(processorId: number): void {
    var processorList: Processor[] = JSON.parse(localStorage.getItem('processorList'));
    processorList.forEach(item => {
      if (item.id == processorId) {
        this.jobContent.processer = item;
      }
    })
  }

  changeWriter(writerId: number): void {
    var writerList: Writer[] = JSON.parse(localStorage.getItem('writerList'));
    writerList.forEach(item => {
      if (item.id == writerId) {
        this.jobContent.writer = item;
      }
    })
  }
  saveOneJob(): void {
    localStorage.setItem(String(this.jobContent.id), JSON.stringify(this.jobContent));
  }

  runOneJob(): void {
    this.getService.runOneJob(this.jobContent.id);
  }
}
