import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { NoteListComponent } from './components/note-list/note-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddNoteComponent, NoteListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'uzrasine';
}
