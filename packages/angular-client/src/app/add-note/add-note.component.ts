import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  note = {
    title: "",
    content: ""
  }

  constructor(
    private notesService: NotesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async addNote() {
    this.notesService.addNote(this.note).subscribe(
      note => this.goBack()
    )
  }

  goBack() {
    this.router.navigateByUrl("list");
  }

}
