import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes/notes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  constructor(
    private notesService: NotesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  private note;

  ngOnInit() {
    let url = this.route.params.subscribe(
      data => this.getNote(data.id)
    );
  }

  getNote(id) {
    this.note = this.notesService.getNoteById(id);
  }

  updateNote(note) {
    this.notesService.updateNote(note._id, note)
    .subscribe(
      data => this.goBack()
    );
  }

  goBack() {
    this.router.navigateByUrl("list");
  }
}
