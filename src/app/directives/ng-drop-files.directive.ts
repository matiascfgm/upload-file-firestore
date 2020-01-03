import {Directive, EventEmitter, ElementRef, HostListener, Input, Output} from '@angular/core';
import {FileItem} from '../models/file.item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() files: FileItem[] = [];
  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }

  @HostListener('dragover', ['$event'])
  public onDragEnter(event: any) {
    this.mouseSobre.emit(true);
    this._preventAndStop(event);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any) {
    this.mouseSobre.emit(false);
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any) {
    const transfer = this._getTransfer(event);
    if (!transfer) {
      return;
    }

    this._getFiles(transfer.files);

    this._preventAndStop(event);
    this.mouseSobre.emit(false);

  }

  private _getTransfer(event: any) {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTranser;
  }

  private _getFiles(filesList: FileList) {

    // tslint:disable-next-line:forin
    for (const property in Object.getOwnPropertyNames(filesList)) {
      const tempFile = filesList[property];

      if (this._canUpload(tempFile)) {
        const newFile = new FileItem(tempFile);
        this.files.push(newFile);
      }
    }
  }

  private _canUpload(file: File): boolean {
    if (!this._fileDropped(file.name) && this._isImage(file.type)) {
      return true;
    } else {
      return false;
    }
  }

  private _preventAndStop(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  private _fileDropped(fileName: string): boolean {
    for (const file of this.files) {
      if (file.fileName === fileName) {
        console.log('exists');
        return true;
      }
    }
  }

  private _isImage(fileType: string): boolean {
    return (fileType === '' || fileType === undefined) ? false : fileType.startsWith('image');
  }

}
