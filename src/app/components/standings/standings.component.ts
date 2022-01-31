import { Component, OnInit } from '@angular/core';
import { StandingsService } from './standings.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.sass']
})
export class StandingsComponent implements OnInit {

  standings: any;
  easternConference: any;
  westernConference: any;

  constructor(private standingsService: StandingsService) { }

  getStandings() {
    this.standingsService.getStandings().subscribe((standings: any) => {
      this.standings = standings
      this.getConferenceStandings(this.standings)
    })
  }

  getConferenceStandings(standings: any) {
    // eastern conference data
    let easternDivisions = standings.filter((division: any) => {
      return division.conference.name === 'Eastern'
    }).map((division: any) => division.teamRecords)
    this.easternConference = [...easternDivisions[0], ...easternDivisions[1]]
    this.easternConference.sort((a: { conferenceRank: number; }, b: { conferenceRank: number; }) => a.conferenceRank - b.conferenceRank)

    // western conference data
    this.westernConference = standings.filter((division: any) => {
      return division.conference.name === 'Western'
    }).map((division: any) => division.teamRecords)
    this.westernConference = [...this.westernConference[0], ...this.westernConference[1]]
    this.westernConference.sort((a: { conferenceRank: number; }, b: { conferenceRank: number; }) => a.conferenceRank - b.conferenceRank)

  }

  ngOnInit(): void {
    this.getStandings();
  }

}
