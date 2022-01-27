import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  teams: any = []

  constructor(private http: HttpClient,) { }

  getTeams(): Observable<any> {
    console.log('getting teams...')
    return this.http.get<any>('http://localhost:6969/teams')
      .pipe(
        catchError(this.handleError<any>('getTeams', []))
      )
  }

  getTeam(id: number): Observable<any> {
    console.log('getting team...')
    return this.http.get<any>(`http://localhost:6969/team/${id}`)
      .pipe(
        catchError(this.handleError<any>('getTeam', []))
      )
  }

  getTeamStats(id: number): Observable<any> {
    console.log('getting team stats...')
    return this.http.get<any>(`http://localhost:6969/team/${id}/stats`)
      .pipe(
        catchError(this.handleError<any>('getTeam', []))
      )
  }

  getTeamRoster(id: number): Observable<any> {
    console.log('getting team stats...')
    return this.http.get<any>(`http://localhost:6969/team/${id}/roster`)
      .pipe(
        catchError(this.handleError<any>('getTeam', []))
      )
  }

  getPreviousGame(id: number): Observable<any> {
    console.log('getting previous game...')
    return this.http.get<any>(`http://localhost:6969/team/${id}/previous-game`)
      .pipe(
        catchError(this.handleError<any>('getPreviousGame', []))
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
