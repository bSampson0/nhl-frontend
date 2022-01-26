import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../teams.service'


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})
export class TeamComponent implements OnInit {

  team: any;

  constructor(private teamService: TeamsService) { }

  getTeam(id: number): void {
    this.teamService.getTeam(id)
      .subscribe((team: any) => {
        this.team = null
        this.team = team
        console.log(`Getting team with id ${id}:`)
        console.log(team)
      })
  }

  ngOnInit(): void {}
}

