import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LocalerService } from '../../service/localer.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-service-test',
  templateUrl: './service-test.component.html',
  styleUrls: ['./service-test.component.scss']
})
export class ServiceTestComponent implements OnInit {
  @ViewChild('dataInput', {static: true}) dataInputRef: ElementRef;
  constructor(private localerService: LocalerService) { }

  ngOnInit() {
  }

  saveLocal() {
    this.localerService.saveLocalStorage(this.dataInputRef.nativeElement.value);
  }

  getLocal() {
    this.localerService.getLocalStorage();
  }

  saveSession() {
    this.localerService.saveSessionStorage(this.dataInputRef.nativeElement.value);
  }

  getSession() {
    this.localerService.getSessionStorage();
  }
}
