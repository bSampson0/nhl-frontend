import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.sass']
})
export class PlayerDetailComponent implements OnInit {

  playerStats: any
  playerBio: any
  displayedColumns: string[] = ['goals', 'assists', 'points', 'hits']

  constructor(private playerService: PlayerService, private route: ActivatedRoute) { }

  getPlayerStats(id: number): void {
    this.playerService.getPlayerStats(id).subscribe((player: any) => {
      console.log(player.stat)
      this.playerStats = player.stat
    })
  }

  getPlayerDetails(id: number): void {
    this.playerService.getPlayerDetails(id).subscribe((player: any) => {
      console.log(player)
      this.playerBio = player
    })
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.getPlayerStats(+params['id'])
      this.getPlayerDetails(+params['id'])
    })
  }

}
