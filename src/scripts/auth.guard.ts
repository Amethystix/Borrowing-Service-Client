import axios from 'axios';

export default class AuthGuard {

  static authorize(token: string) {
    return axios.get('http://localhost:3000/users/auth', {
      headers: {
        Authorization: token,
      }
    });
  }
}