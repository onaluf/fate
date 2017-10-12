import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

interface Command {
  name: string;
  value : any;
}

@Injectable()
export class FateControllerService {

  public commands: Subject<Command> = new Subject<Command>();

  constructor() { }

  // List of available commands, alphabetically
  // see https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
  public bold() {
    this.commands.next({name: 'bold', value: ''});
  }
  public link() {
    this.commands.next({name: 'createLink', value: ''});
  }
  public fontSize(size) {
    this.commands.next({name: 'fontSize', value: size});
  }
  public foreColor(color) {
    this.commands.next({name: 'foreColor', value: color});
  }
  public heading(level) { // Not IE ?, should test and possibly add < >
    this.commands.next({name: 'formatBlock', value: 'H' + level});
  }
  public hiliteColor(color) {
    this.commands.next({name: 'hiliteColor', value: color});
  }
  public indent() {
    this.commands.next({name: 'indent', value: ''});
  }
  public insertImage(url) {
    this.commands.next({name: 'insertImage', value: url});
  }
  public insertOrderedList() {
    this.commands.next({name: 'insertOrderedList', value: ''});
  }
  public insertUnorderedList() {
    this.commands.next({name: 'insertUnorderedList', value: ''});
  }
  public insertParagraph() {
    this.commands.next({name: 'insertParagraph', value: ''});
  }
  public italic() {
    this.commands.next({name: 'italic', value: ''});
  }
  public justifyCenter() {
    this.commands.next({name: 'justifyCenter', value: ''});
  }
  public justifyFull() {
    this.commands.next({name: 'justifyFull', value: ''});
  }
  public justifyLeft() {
    this.commands.next({name: 'justifyLeft', value: ''});
  }
  public justifyRight() {
    this.commands.next({name: 'justifyRight', value: ''});
  }
  public outdent() {
    this.commands.next({name: 'outdent', value: ''});
  }
  public redo() {
    this.commands.next({name: 'redo', value: ''});
  }
  public removeFormat() {
    this.commands.next({name: 'removeFormat', value: ''});
  }
  public strikeThrough() {
    this.commands.next({name: 'strikeThrough', value: ''});
  }
  public subscript() {
    this.commands.next({name: 'subscript', value: ''});
  }
  public superscript() {
    this.commands.next({name: 'superscript', value: ''});
  }
  public underline() {
    this.commands.next({name: 'underline', value: ''});
  }
  public undo() {
    this.commands.next({name: 'undo', value: ''});
  }
  public unlink() {
    this.commands.next({name: 'unlink', value: ''});
  }
  // styleWithCSS as fallback for some things ?
}
