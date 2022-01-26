import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../teams.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {

  teams: any = [];

  constructor(private teamService: TeamsService) {
  }

  getTeams(): void {
    this.teamService.getTeams()
      .subscribe((teams: any) => {
        console.log('getting teams from api')
        this.teams = teams
      })
  }

  ngOnInit(): void {
    this.getTeams()
  }

}
