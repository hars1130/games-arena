import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  httpOptions: any = {
    observe: 'response'
  };

  constructor(private http: HttpClient) { }

  private apiUrl = "http://starlord.hackerearth.com/gamesarena";

  public getGamesList() {
    return this.http.get(this.apiUrl, this.httpOptions).pipe(map(result => result['body']));
  }

}
