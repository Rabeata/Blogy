import { Component } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Blogy';
  items: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(public fs: AngularFirestore) {

    firestore().collection('items').onSnapshot(x => {
      let data: any[] = [];
      x.docs.forEach(element => {
        data.push(element.data());
      });

      this.items.next(data);

      });

  }


}
