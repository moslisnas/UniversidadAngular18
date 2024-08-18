import { Injectable } from '@angular/core';
import * as firebase from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  token: string;
  constructor(private router: Router) {}

  login(email: string, password: string) {
    const auth = firebase.getAuth();

    firebase
      .signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        auth.currentUser?.getIdToken().then((token) => {
          this.token = token;
          this.router.navigate(['/']);
        });
      });
  }

  getIdToken() {
    return this.token;
  }

  isAutenticado() {
    return this.token != null;
  }

  logout() {
    const auth = firebase.getAuth();

    auth
      .signOut()
      .then(() => {
        this.token = null;
        this.router.navigate(['/login']);
      })
      .catch((error) => console.log('error logout:' + error));
  }
}
