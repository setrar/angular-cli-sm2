import {Component, OnInit} from '@angular/core';

declare const soundManager: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  ngOnInit() {
    soundManager.setup({
      url: '/assets/sm2/swf/',
      preferFlash: true,
      debugFlash: true,
      flashVersion: 9,
      useFlashBlock: true,
      onready: function() {
        const sound = soundManager.createSound({
          id: 'soundid',
          serverURL: 'rtmp://media.crave.fm:1935/vod/',
          url: [
            'mp3:TIAr0000000196Al0000000001So0000006243.mp3',
            'mp3:TIAr0000000196Al0000000001So0000006243.mp3'
          ],
          onconnect: function(bConnect) {
            // this.connected can also be used
            soundManager._writeDebug(this.id + ' connected: ' + (bConnect ? 'true' : 'false' ));
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
        sound.play();
      },
      ontimeout: function() {
        // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
      }
    });
  }
}
