import axios from 'axios';

export default class AuthGuard {

  public static authorize(token: string) {
    return axios.get('https://borrowing-svc-api.appspot.com/users/auth', {
      headers: {
        Authorization: token,
      }
    });
  }
}