import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: Auth
  ) { }

  const signInWithGoogle = async () => {
    const result = await FirebaseAuthentication.signInWithGoogle();
    
    return result.user;
  };

}
