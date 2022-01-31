import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {


  constructor(private http: HttpClient,) { }

  getStandings(): Observable<any> {
    return this.http.get<any>('http://localhost:6969/standings')
      .pipe(
        catchError(this.handleError<any>('getStandings', []))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
