import {Component, EventEmitter, OnInit} from '@angular/core';
import {DetectBrowserService} from '../shared/detect-browser.service';

declare const soundManager: any;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  private soundObject;
  private browser;


  constructor(private detectBrowserService: DetectBrowserService) {
  }

  ngOnInit() {

  }

  choose() {

    this.soundObject = soundManager.createSound({
      id: 'soundid',
      serverURL: 'rtmp://media.crave.fm:1935/vod/',
      url: 'mp3:TIAr0000000196Al0000000001So0000006243.mp3',
      onconnect: function (bConnect) {
        // this.connected can also be used
        soundManager._writeDebug(this.id + ' connected: ' + (bConnect ? 'true' : 'false' ));
      },
      duration: 300000, // example for a 5 minutes song
      onload: function () {
        console.log('DURATION: ', this.duration);
      },
      whileplaying: function () {
        console.log(this.duration);
      },
      volume: 100
    });
  }

  play() {
      this.soundObject.play();

  }

  stop() {
    this.soundObject.stop();
  }

  detectBrowser() {
    return this.detectBrowserService.detectIE();
  }
}
