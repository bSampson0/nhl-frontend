import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GretzkyService {

  constructor(private http: HttpClient,) { }

  getGretzkyGamelog(): Observable<any> {
    console.log('getting gamelog')
    return this.http.get<any>(`http://localhost:6969/gretzky-gamelogs`)
      .pipe(
        catchError(this.handleError<any>('getGretzkyGamelog', []))
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
