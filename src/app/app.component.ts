import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { ProjectName, ProjectImage } from './config/project.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projectName = ProjectName;
  projectImage = ProjectImage;
  email = '';
  password = '';



  constructor(
    public afAuth: AngularFireAuth) {
    afAuth.user.subscribe((user: firebase.User) => {

      if (user) {
        console.log(user.uid);
        console.log(user.displayName);
      }
    });
  }


  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
    .then(x => {
      console.log(x.user.uid);
      console.log(x.user.displayName);
    })
    .catch(reson => {
      console.log(reson.message);
    });
  }


  logout() {
    this.email = '';
    this.password = '';
    this.afAuth.auth.signOut();
  }

}
