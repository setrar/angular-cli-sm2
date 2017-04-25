import {Component, OnInit} from '@angular/core';
import browser from 'detect-browser';

declare const soundManager: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  ngOnInit() {
    switch (browser && browser.name) {
      case 'chrome':
      case 'firefox':
        soundManager.setup({
          url: '/assets/sm2/swf/',
          preferFlash: true,
          debugFlash: true,
          flashVersion: 9,
          useFlashBlock: true,
          ontimeout: function () {
            // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
            console.error('can\'t load sound manager');
          }
        });
        break;

      case 'edge':
        break;

      default:
        console.log('BROWSER UNDEFINED');
        break;
    }
  }
}
