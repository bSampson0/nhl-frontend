import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../teams.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.sass']
})
export class TeamDetailComponent implements OnInit {

  team: any;
  teamStats: any;
  teamRoster: any;

  constructor(private teamsService: TeamsService, private _route: ActivatedRoute) { }

  getTeam(id: number): void {
    this.teamsService.getTeam(id)
      .subscribe((team: any) => {
        this.team = team
        console.log(`Getting team with id ${id}:`)
        console.log(team)
      })
  }

  getTeamStats(id: number): void {
    this.teamsService.getTeamStats(id)
      .subscribe((team: any) => {
        this.teamStats = team
        console.log(`Getting team stats with id ${id}:`)
        console.log(team)
      })
  }

  getTeamRoster(id: number): void {
    this.teamsService.getTeamRoster(id)
      .subscribe((team: any) => {
        this.teamRoster = team
        console.log(this.teamRoster)
      })
  }

  ngOnInit(){
    this._route.params.subscribe(params => {
      this.getTeam(+params['id'])
      this.getTeamStats(+params['id'])
      this.getTeamRoster(+params['id'])
    })
  }

}
