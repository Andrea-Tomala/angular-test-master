import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './types';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private gamesUrl = 'api/games';

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl);
  }

  getGameById(gameId: string):Observable<Game> {
    const url = `${this.gamesUrl}/${gameId}`;
    return this.http.get<Game>(url);
  }

  createGame(game: Game): Observable<Game> {
    return this.http.post<Game>(this.gamesUrl, game);
  }

  updateGame(game: Game): Observable<Game> {
    const url = `${this.gamesUrl}/${game.id}`;
    return this.http.put<Game>(url, game);
  }

  deleteGame(gameId: number) : Observable<Game>{
    const url = `${this.gamesUrl}/${gameId}`;
    return this.http.delete<Game>(url);
  }
}
