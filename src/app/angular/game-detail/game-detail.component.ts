import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../types';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  gameForm!: FormGroup;
  game: Game | undefined;
  isEditMode: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private gameService: GameService) {
      this.gameForm = this.formBuilder.group({
        id: [{ value: '', disabled: true }],
        name: ['', Validators.required],
        description: ['']
      });
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const gameId = params.get('gameId');
      if (gameId) {
        this.gameService.getGameById(gameId).subscribe(game => {
          this.game = game;
          this.dateForm(game);
        });
      }
    });
  }

  dateForm(game: Game): void {
    this.gameForm.setValue({
      id: game.id,
      name: game.name,
      description: game.description
    });
  }

  updateGames(): void {
    const formData = this.gameForm.value as Game;
    if (this.game) {
      formData.id = this.game.id;
      this.gameService.updateGame(formData).subscribe(() => {
        this.router.navigate(['/angular/senior/games']);
      });
    }

  }

}
