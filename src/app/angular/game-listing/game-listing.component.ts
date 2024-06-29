import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../types';

@Component({
  selector: 'app-game-listing',
  templateUrl: './game-listing.component.html',
  styleUrls: ['./game-listing.component.css'],
})
export class GameListingComponent implements OnInit {
  games?: Game[];
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGames().subscribe((games) => {
      this.games = games;
      console.log(this.games)
    });
  }

  deleteGame(gameId: number): void {
    this.gameService.deleteGame(gameId).subscribe(()=>{
      this.games = this.games?.filter(game => game.id !== gameId);
    })
  }
}
