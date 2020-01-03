import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import * as firebase from 'firebase';
import {FileItem} from './models/file.item';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private CARPETA_IMAGENES = 'img';

  constructor(private db: AngularFirestore) {
  }

  loadImagesFirebase(images: FileItem[]) {
    const storageRef = firebase.storage().ref();

    for (const item of images) {
      item.uploading = true;
      if (item.progress >= 100) {
        continue;
      }
      const uploadTask: firebase.storage.UploadTask =
        storageRef.child(`${this.CARPETA_IMAGENES}/${item.fileName}`)
          .put(item.file);

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: firebase.storage.UploadTaskSnapshot) =>
          item.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        (error) => console.error('error on upload ', error),
        () => {
        console.log('image uploaded');
        item.url = uploadTask.snapshot.downloadURL;
        item.uploading = false;
        this.saveImg({
          name: item.fileName,
          url: item.url
        });
        });
    }
  }

  private saveImg(image: {name: string, url: string}) {
    this.db.collection(`/${this.CARPETA_IMAGENES}`)
      .add(image);
  }
}
