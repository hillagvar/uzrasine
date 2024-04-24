import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Note } from '../../models/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css'
})
export class AddNoteComponent {
  
  public content: string | null = null;

  public notes : Note[];

  public constructor(private noteService: NoteService) {
    this.notes = noteService.notes;
  }

  public addNote() {
    if (this.content != null) {
      
        this.noteService.addNote({
          date: new Date().toLocaleString(),
          content: this.content,
        })
      }
      // console.log(this.notes);
      this.content = null;
  }

}
