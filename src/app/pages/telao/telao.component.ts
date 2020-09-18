import { Component, OnInit, HostBinding, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-telao',
  templateUrl: './telao.component.html',
  styleUrls: ['./telao.component.scss']
})
export class TelaoComponent implements OnInit {
  @ViewChild('fullScreen') divRef;

  constructor() { }

  ngOnInit(): void {

  }

  openFullscreen(): void {
    // Use this.divRef.nativeElement here to request fullscreen
    const elem = this.divRef.nativeElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
  }
}
