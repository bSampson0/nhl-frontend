import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service'


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.sass']
})
export class TeamsComponent implements OnInit {

  teams: any = [];
  team: any;
  teamStats: any;

  constructor(private teamService: TeamsService) { }

  getTeams(): void {
    this.teamService.getTeams()
      .subscribe((teams: any) => {
        console.log('getting teams from api')
        this.teams = teams
      })
  }

  getTeam(id: number): void {
    this.teamService.getTeam(id)
      .subscribe((team: any) => {
        this.team = null
        this.teamStats = null
        this.team = team
        console.log(`Getting team with id ${id}:`)
        console.log(team)
      })
  }

  getTeamStats(id: number): void {
    this.teamService.getTeamStats(id)
      .subscribe((team: any) => {
        this.teamStats = team
        console.log(`Getting team stats with id ${id}:`)
        console.log(team)
      })
  }

  ngOnInit(): void {
    this.getTeams()
  }

}
