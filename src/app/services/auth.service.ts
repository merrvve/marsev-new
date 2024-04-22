import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { BehaviorSubject, Observable, from, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user$: BehaviorSubject<firebase.User | null> = new BehaviorSubject<firebase.User | null>(null);
  user$: Observable<firebase.User | null> = this._user$.asObservable();
  isUserLoggedIn: boolean = false;

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.pipe(
      tap(user => {
        this.isUserLoggedIn = !!user;
        this._user$.next(user);
      })
    ).subscribe();
  }

  signUp(email: string, password: string): Observable<firebase.auth.UserCredential> {
    return from(this.afAuth.createUserWithEmailAndPassword(email, password));
  }

  signIn(email: string, password: string): Observable<firebase.auth.UserCredential> {
    return from(this.afAuth.signInWithEmailAndPassword(email, password));
  }

  signOut(): Observable<void> {
    return from(this.afAuth.signOut());
  }


}
