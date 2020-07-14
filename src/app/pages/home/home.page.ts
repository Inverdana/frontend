import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { MeResponseInterface } from 'src/app/types/me.response.interface';
import { MeInterface } from 'src/app/types/me.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private authService:AuthService) { }
  me:MeInterface;
  ngOnInit() {
  this.authService.me().subscribe(me => this.me=me)
  }

}
