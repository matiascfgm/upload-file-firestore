import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs';

export interface Item {
  'name': string;
  'url': string;
}

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styles: []
})
export class PicturesComponent implements OnInit {
  private imagesCollection: AngularFirestoreCollection<Item>;
  images: Observable<Item[]>;

  constructor(private afs: AngularFirestore) {
    this.imagesCollection = afs.collection<Item>('img');
    this.images = this.imagesCollection.valueChanges();
  }

  ngOnInit() {
  }

}
