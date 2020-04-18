import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor() {}
  today: Date = new Date();
  ngOnInit(): void {}

  @ViewChild("myVideo") myVideo: any;

  afterViewInit() {
    let video: HTMLVideoElement = <HTMLVideoElement>this.myVideo.nativeElement;
    video.play();
  }
}
