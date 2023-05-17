import { Component } from '@angular/core';
import { OAuthService } from '../../services/o-auth.service';

@Component({
  selector: 'app-o-auth',
  templateUrl: './o-auth.component.html',
  styleUrls: ['./o-auth.component.css']
})
export class OAuthComponent {
  constructor(private oAuthService: OAuthService) {}

  async login(): Promise<void> {
    await this.oAuthService.loginWithGitHub().then(() => {
      console.log('Logged in');
      })
      .catch((error) => {
        console.error('Error logging in:', error);
      });
  }

  async logout(): Promise<void> {
    await this.oAuthService.oAuthLogout().then(() => {
      console.log('Logged out');
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  }

}
