import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Note } from '../../models/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent {
  public notes: Note[];

  public constructor (private noteService: NoteService) {
    this.notes = noteService.notes;
  }

  public deleteNote(i:number) {
    this.noteService.deleteNote(i);
  }

}
