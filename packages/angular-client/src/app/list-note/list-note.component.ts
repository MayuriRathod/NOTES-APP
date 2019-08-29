import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.scss']
})
export class ListNoteComponent implements OnInit {
  
  private notes;

  constructor(
    private notesService: NotesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getNotes()
  }

  getNotes() {
    this.notes = this.notesService.getAllNotes();
  }

  addNote() {
    this.router.navigateByUrl("/add")
  }

  editNote(note) {
    this.router.navigateByUrl(`/edit/${note._id}`)
  }

  deleteNote(note) {
    this.notesService.deleteNote(note._id).subscribe(
      data => this.getNotes()
    )
  }

}
