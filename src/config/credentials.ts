import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';
import {Credentials} from '../interface';

export class AppCredential {
  public async getAuth() {
    return await this.getAuthCredentials();
  }

  public async setAuth(credential: Credentials) {
    await this.setAuthCredentials(credential);
  }

  public async removeAuth() {
    await this.removeAuthCredentials();
  }

  private async getAuthCredentials(): Promise<Credentials> {
    let token = '';
    let id = '';
    try {
      token = await RNSecureKeyStore.get('token');
      id = await RNSecureKeyStore.get('id');
    } finally {
      return {
        token,
        id,
      };
    }
  }

  private async setAuthCredentials({token, id}: Credentials): Promise<void> {
    if (!token) {
      return;
    }

    try {
      await RNSecureKeyStore.set('token', token, {
        accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
      });
      await RNSecureKeyStore.set('id', id, {
        accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
      });
    } catch (e) {
      throw new Error('[APP ERROR]: Error setting credentials');
    }
  }

  private async removeAuthCredentials(): Promise<void> {
    try {
      await RNSecureKeyStore.remove('token');
      await RNSecureKeyStore.remove('id');
    } catch (e) {
      console.log('[APP ERROR]: Unable to remove key -', e);
    }
  }
}
