import { Component, ViewEncapsulation } from '@angular/core';

import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../vendor/bootstrap/css/bootstrap.min.css', '../vendor/font-awesome/css/font-awesome.min.css',
              '../vendor/magnific-popup/magnific-popup.css' , '../bs_css/creative.min.css', '../bs_css/projectStyles.css'],
              encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
}
