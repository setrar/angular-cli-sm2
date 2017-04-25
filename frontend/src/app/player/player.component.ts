import {Component, EventEmitter, OnInit} from '@angular/core';
import {DetectBrowserService} from '../shared/detect-browser.service';
import browser from 'detect-browser';

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

    // handle the case where we don't detect the browser
    switch (browser && browser.name) {
      case 'chrome':
      case 'firefox':
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
        console.log('Chrome and Firefox - Player : ');
        break;

      case 'edge':
      case 'safari':
        this.soundObject = soundManager.createSound({
          id: 'soundid',
          serverURL: '', // Empty when HLS
          url: [
            'http://media.crave.fm:1935/vod/mp3:TIAr0000000196Al0000000001So0000006243.mp3/playlist.m3u8',
            'http://media.crave.fm:1935/vod/mp3:TIAr0000000196Al0000000001So0000006243.mp3/playlist.m3u8'
          ],
          onconnect: function(bConnect) {
            // this.connected can also be used
            soundManager._writeDebug(this.id + ' connected: ' + (bConnect ? 'true' : 'false' ) );
          },
          duration: 300000, // example for a 5 minutes song
          autoLoad: true,
          autoPlay: false,
          onload: function() {
            console.log('DURATION: ', this.duration);
          },
          whileplaying: function() {
            console.log(this.duration);
          },
          volume: 100
        });
        console.log('Edge and Safari - Player');
        break;

      default:
        console.log('not supported');
    }

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
