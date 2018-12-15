import Vue from 'vue';

/**
 * For safari support- will use in future, has some bugs rn
 */

export default class CookieHelper {

  public getAuthCookie(): any {
    return Vue.cookies.get('token');
  }

  public hasAuthCookie(): boolean {
    return Vue.cookies.isKey('token');
  }

  public hasUserCookie(): boolean {
    return Vue.cookies.isKey('user');
  }

  public getUserCookie(): any {
    return Vue.cookies.get('user');
  }

  public deleteAuthCookie(): void {
    Vue.cookies.remove('token');
  }

  public deleteUserCookie(): void {
    Vue.cookies.remove('user');
  }

  public getFirstName(): string {
    return this.hasUserCookie() ? Vue.cookies.get('user').firstName : '';
  }

  public getUserId(): string {
    return this.hasUserCookie() ? Vue.cookies.get('user').uuid : '';
  }
}