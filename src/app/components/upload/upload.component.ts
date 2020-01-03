import { Component, OnInit } from '@angular/core';
import {UploadService} from '../../upload.service';
import { FileItem } from 'src/app/models/file.item';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styles: []
})
export class UploadComponent implements OnInit {

  hover = false;
  files: FileItem[] = [];
  constructor(public uploadService: UploadService) { }

  ngOnInit() {
  }

  uploadImages() {
    this.uploadService.loadImagesFirebase(this.files);
  }

  overElement(event) {
    console.log(event);
  }

  emptyFiles() {
    this.files = [];
  }

}
