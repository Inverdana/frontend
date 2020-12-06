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
  public user: MeInterface;
  public addFriendForm: boolean;
  public switchViewMessage: string;
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
    this.authService.me().subscribe(me => {
      this.code = me.username;
      this.user = me;
    });

  }


  switchView() {
    this.addFriendForm = !this.addFriendForm;
  }

  async addFriendCode() {
    const response = await this.amigoService.addAmigo(this.friendCode);
    response.subscribe(t => {
      this.toastService.presentToast('Se ha agregado el código de forma exitosa', 'success');
      this.ngOnInit();
    })
  }

}
