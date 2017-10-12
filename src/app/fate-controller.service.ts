import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

interface Command {
  name: string;
  value : any;
}

@Injectable()
export class FateControllerService {

  private commands = {
    default: new Subject<Command>()
  };

  constructor() { }

  public channel(channelId) {
    if (!this.commands[channelId]) {
      this.commands[channelId] = new Subject<Command>();
    }
    return this.commands[channelId];
  }

  // List of available commands, alphabetically
  // see https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
  public bold(channel) {
    this.commands[channel].next({name: 'bold', value: ''});
  }
  public link(channel, value) {
    this.commands[channel].next({name: 'createLink', value: value});
  }
  public fontSize(channel, size) {
    this.commands[channel].next({name: 'fontSize', value: size});
  }
  public foreColor(channel, color) {
    this.commands[channel].next({name: 'foreColor', value: color});
  }
  public heading(channel, level) { // Not IE ?, should test and possibly add < >
    this.commands[channel].next({name: 'formatBlock', value: 'H' + level});
  }
  public hiliteColor(channel, color) {
    this.commands[channel].next({name: 'hiliteColor', value: color});
  }
  public indent(channel) {
    this.commands[channel].next({name: 'indent', value: ''});
  }
  public insertImage(channel, url) {
    this.commands[channel].next({name: 'insertImage', value: url});
  }
  public insertOrderedList(channel) {
    this.commands[channel].next({name: 'insertOrderedList', value: ''});
  }
  public insertUnorderedList(channel) {
    this.commands[channel].next({name: 'insertUnorderedList', value: ''});
  }
  public insertParagraph(channel) {
    this.commands[channel].next({name: 'insertParagraph', value: ''});
  }
  public italic(channel) {
    this.commands[channel].next({name: 'italic', value: ''});
  }
  public justifyCenter(channel) {
    this.commands[channel].next({name: 'justifyCenter', value: ''});
  }
  public justifyFull(channel) {
    this.commands[channel].next({name: 'justifyFull', value: ''});
  }
  public justifyLeft(channel) {
    this.commands[channel].next({name: 'justifyLeft', value: ''});
  }
  public justifyRight(channel) {
    this.commands[channel].next({name: 'justifyRight', value: ''});
  }
  public outdent(channel) {
    this.commands[channel].next({name: 'outdent', value: ''});
  }
  public redo(channel) {
    this.commands[channel].next({name: 'redo', value: ''});
  }
  public removeFormat(channel) {
    this.commands[channel].next({name: 'removeFormat', value: ''});
  }
  public strikeThrough(channel) {
    this.commands[channel].next({name: 'strikeThrough', value: ''});
  }
  public subscript(channel) {
    this.commands[channel].next({name: 'subscript', value: ''});
  }
  public superscript(channel) {
    this.commands[channel].next({name: 'superscript', value: ''});
  }
  public underline(channel) {
    this.commands[channel].next({name: 'underline', value: ''});
  }
  public undo(channel) {
    this.commands[channel].next({name: 'undo', value: ''});
  }
  public unlink(channel) {
    this.commands[channel].next({name: 'unlink', value: ''});
  }
  // styleWithCSS as fallback for some things ?
}
