import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  

  constructor(private http: HttpClient,) { }

  getPlayerStats(id: number): Observable<any> {
      console.log('getting player stats')
      return this.http.get<any>(`http://localhost:6969/player/${id}/stats`)
        .pipe(
          catchError(this.handleError<any>('getPlayer', []))
        )
  }

	getPlayerDetails(id: number): Observable<any> {
			console.log('getting player bio')
			return this.http.get<any>(`http://localhost:6969/player/${id}`)
				.pipe(
					catchError(this.handleError<any>('getPlayerDetails', []))
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
