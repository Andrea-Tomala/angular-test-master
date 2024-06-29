import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-new',
  templateUrl: './game-new.component.html',
  styleUrls: ['./game-new.component.css']
})
export class GameNewComponent implements OnInit {

  gameForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private gameService: GameService
  ) {
    this.gameForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.gameForm.valid) {
      const gameData = this.gameForm.value;
      this.gameService.createGame(gameData).subscribe(() => {
        this.router.navigate(['/angular/senior/games']);
      });
    }else{
      alert('Debes llenar todos los campos');
    }
  }

}
