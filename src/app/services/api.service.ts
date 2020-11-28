import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class APIService {
  constructor(
    private fs: AngularFirestore
  ) {
  }

  public GetItems(): Observable<any[]> {
    return this.fs.collection('items').valueChanges();
  }

}
