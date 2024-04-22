import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
@Injectable({
  providedIn: 'root'
})
export class EtkinlikService {
  constructor(private firestore: AngularFirestore) { }

  getAllEtkinlikler(): Observable<any[]> {
    return this.firestore.collection('etkinlik').valueChanges();
  }
}
