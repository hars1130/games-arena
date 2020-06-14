import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  games: Game[];
  filteredGames: Game[];
  searchStr: string;
  constructor(public gamesService: GamesService) { 
    this.games = [];
  }

  ngOnInit() {
    this.gamesService.getGamesList().subscribe(data => {
      this.games = [...data.slice(1)];
      this.filteredGames = [...data.slice(1)];
    })
  }

  filterGames(){
    let that = this;
    this.filteredGames = this.games.filter(game => game.title.toUpperCase().search(that.searchStr.toUpperCase()) !== -1)
  }

  ascendingSort(){
    this.filteredGames.sort((a, b) => a.score - b.score)
  }

  descendingSort(){
    this.filteredGames.sort((a, b) => b.score - a.score)
  }

}
