import {Component, EventEmitter, OnInit} from '@angular/core';

declare const soundManager: any;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  private soundObject;
  private browser;


  constructor() { }

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

  /**
   * detect IE
   * returns version of IE or false, if browser is not Internet Explorer
   */
  detectIE() {
    const ua = window.navigator.userAgent;
    this.browser = ua;
    console.log('detecting .........................' + ua)

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

  // IE 12 / Spartan
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

  // Edge (IE 12+)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  const msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  const trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    const rv = ua.indexOf('rv:');
    return  parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  const edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return  parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  return 0;
}

}
