import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ProcessComponent implements OnInit {
  @Input() showDownload = false;
  // @Output() processCompleted = new EventEmitter();
  processing = true;
  message: any;
  constructor() {}

  ngOnInit(): void {}
  onProcess() {
    this.showDownload = true;
    //this.processCompleted.emit();
    // this.http.get<any>('api/files/process').subscribe((res) => {
    //   this.processing = false;
    //   this.message = res.message;
    // });
    this.processing = false;
  }
}
