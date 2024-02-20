import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}



  getCharactersPage(page: number): Observable<any> {
    const url = `${this.apiUrl}/?page=${page}`;
    return this.http.get<any>(url)
      .pipe(
        catchError(error => {
          console.error('API Error:', error);
          return throwError(() => 'Something went wrong with the API request.');
        })
      );
  }

  getCharacterById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url)
      .pipe(
        catchError(error => {
          console.error('API Error:', error);
          return throwError(() => 'Something went wrong with the API request.');
        })
      );
  }
}
