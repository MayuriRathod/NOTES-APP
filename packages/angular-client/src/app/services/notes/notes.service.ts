import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  ENV_URL = environment.url + '/notes';

  constructor(
    private apiService: ApiService
  ) { }

  getAllNotes() {
    return this.apiService.get(this.ENV_URL);
  }

  getNoteById(id) {
    return this.apiService.get(this.ENV_URL + `/${id}`);
  } 

  addNote(data) {
    return this.apiService.post(this.ENV_URL, data);
  }

  updateNote(id, data) {
    return this.apiService.put(this.ENV_URL + `/${id}`, data);
  } 

  deleteNote(id) {
    return this.apiService.delete(this.ENV_URL + `/${id}`);
  }
}
