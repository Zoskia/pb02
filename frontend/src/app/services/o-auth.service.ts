import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';

@Injectable({
  providedIn: 'root',
})
export class OAuthService {
  pb:PocketBase = new PocketBase('http://127.0.0.1:8090');

  async loginWithGitHub(): Promise<void> {
    const authData = await this.pb
      .collection('users')
      .authWithOAuth2({ provider: 'github' });
  }

  async oAuthLogout(): Promise<void> {
    const authData = await this.pb.authStore.clear();
  }
}
