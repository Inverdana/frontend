import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { ToastService } from 'src/app/services/toast.service';
import { MeInterface } from 'src/app/types/me.interface';
import { FriendService } from 'src/app/services/friend.service';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {

  public code: string;
  public addFriendForm: boolean;
  public shareMessage: string;
  public friendCode: string;

  constructor(
    public authService: AuthService,
    public toastService: ToastService,
    public spinnerService: SpinnerService,
    public amigoService: FriendService
  ) { }

  ngOnInit() {
    this.addFriendForm = false;
    this.spinnerService.startLoadingSpinner();
    this.authService.me().subscribe(me => {
      this.code = me.username;
      this.spinnerService.stopLoadingSpinner();
    });

  }

  switchView() {
    this.addFriendForm = !this.addFriendForm;
  }

  async addFriendCode() {
      await this.amigoService.addAmigo(this.friendCode);
  }

}
