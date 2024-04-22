import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class KitapService {
  constructor(private firestore: AngularFirestore) { }

  getAllEtkinlikler(): Observable<any[]> {
    return this.firestore.collection('kitap').valueChanges();
  }
}
