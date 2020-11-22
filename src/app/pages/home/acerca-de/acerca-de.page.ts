import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser"

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
})
export class AcercaDePage implements OnInit {
  vidUrl:SafeResourceUrl;

  constructor(private domSanitizer:DomSanitizer) { }

  ngOnInit() {
    /*from https://www.youtube.com/watch?v=t-6-vlLj2l0*/
    this.vidUrl = this.domSanitizer.bypassSecurityTrustResourceUrl
    ("https://www.wikipedia.org/");
  }

}
