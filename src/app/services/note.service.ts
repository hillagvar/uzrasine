import { Injectable } from '@angular/core';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  public notes : Note[] = [];

  constructor() {
    let s = localStorage.getItem("notes");
    if (s != null) {
      this.notes = JSON.parse(s);
    }
   }

    private save() {
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }

  public addNote(note: Note) {
    this.notes.push(note);
    this.save();
  }

  public deleteNote(i: number) {
    this.notes.splice(i, 1);
    this.save();
  }
}
