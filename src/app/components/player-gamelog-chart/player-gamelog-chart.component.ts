import { Component, OnInit } from '@angular/core';
import { GamelogService } from './gamelog.service';
import { ActivatedRoute } from '@angular/router';

import * as d3 from 'd3'

@Component({
  selector: 'app-player-gamelog-chart',
  templateUrl: './player-gamelog-chart.component.html',
  styleUrls: ['./player-gamelog-chart.component.sass']
})
export class PlayerGamelogChartComponent implements OnInit {

  gameLogData: any;
  margin = 80;
  rectWidth = 10;
  width = 1000 - (this.margin * 2);
  height = 400 - (this.margin * 2);
  svg: any;

  constructor(private gamelogService: GamelogService, private route: ActivatedRoute) {}


  getPlayerGamelog(id: number): void {
    this.gamelogService.getPlayerGamelog(id)
      .subscribe((gamelog) => {
        this.gameLogData = gamelog
        this.createBarChart()
        this.drawBars()
      })
  }

  createBarChart(): void {
    this.svg = d3.select("#barchart")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  drawBars(): void {

    // Create the X-axis band scale
    const x: any = d3.scaleBand()
      .range([0, this.width])
      .domain(this.gameLogData.map((d: any) => d.date))
      .padding(0.2)


    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
        .data(this.gameLogData)
        .text((d: any) => { return d.opponent.name })
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
      .domain([0, 5])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
      .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
      .data(this.gameLogData)
      .enter()
      .append("rect")
        .attr("x", (d: any) => x(d.date))
        .attr("y", (d: any) => y(d.stat.goals))
        .attr("width", x.bandwidth())
        .attr("height", (d: any) => this.height - y(d.stat.goals))
        .attr("fill", "#d04a35")
}

  ngOnInit() {
    this.route.params.subscribe(async (params: any) => {
      this.getPlayerGamelog(+params['id'])
    })
  }

}
