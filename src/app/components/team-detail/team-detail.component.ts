import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../teams.service'
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.sass']
})
export class TeamDetailComponent implements OnInit {

  team: any;
  data: any;

  constructor(private teamsService: TeamsService, private _route: ActivatedRoute) { }
  
  getTeam(id: number): void {
    this.teamsService.getTeam(id)
      .subscribe((team: any) => {
        this.team = null
        this.team = team
        console.log(`Getting team with id ${id}:`)
        console.log(team)
      })
  }

  ngOnInit(){
    this._route.params.subscribe(params => {
      this.getTeam(+params['id'])
    })
  }

}
