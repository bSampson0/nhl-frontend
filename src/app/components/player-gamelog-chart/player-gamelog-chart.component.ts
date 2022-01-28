import { Component, OnInit } from '@angular/core';
import { GamelogService } from './gamelog.service';
import { ActivatedRoute } from '@angular/router';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

@Component({
  selector: 'app-player-gamelog-chart',
  templateUrl: './player-gamelog-chart.component.html',
  styleUrls: ['./player-gamelog-chart.component.sass']
})
export class PlayerGamelogChartComponent implements OnInit {

  gameLogData: any;

  constructor(private gamelogService: GamelogService, private route: ActivatedRoute) { }

  getPlayerGamelog(id: number): void {
    this.gamelogService.getPlayerGamelog(id)
      .subscribe((gamelog) => {
        this.gameLogData = gamelog
        console.log(gamelog)
      })
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.getPlayerGamelog(+params['id'])
    })
  }

}
