import { Component, OnInit } from '@angular/core';
import { GretzkyService } from './getzky.service';

import * as d3 from 'd3'

@Component({
  selector: 'app-gretzky',
  templateUrl: './gretzky.component.html',
  styleUrls: ['./gretzky.component.sass']
})
export class GretzkyComponent implements OnInit {

  // example query https://statsapi.web.nhl.com/api/v1/people/8447400/stats?stats=gameLog&season=19801981

  gameLog: any = [];

  seasons = [
    "19781979",
    "19791980",
    "19801981",
    "19811982",
    "19821983",
    "19831984",
    "19841985",
    "19851986",
    "19861987",
    "19871988",
    "19881989",
    "19891990",
    "19901991",
    "19911992",
    "19921993",
    "19931994",
    "19941995",
    "19951996",
    "19961997",
    "19961997",
    "19971998",
    "19981999",
  ]

  private width!: number;
  private height!: number;
  private x: any;
  private y: any;
  private svg: any;
  private line!: d3.Line<[any, any]>;
  private margin = {top: 20, right: 20, bottom: 30, left: 50};


  constructor(private gretzkyService: GretzkyService) { 
    this.width = 960 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  }


  getGretzkyGamelog(): void {
    this.gretzkyService.getGretzkyGamelog()
      .subscribe((gamelog: any) => {
        this.gameLog = gamelog
        this.buildSvg()
        this.addXandYAxis()
        this.drawLineAndPath()
      })
  }

  buildSvg(): void {
    this.svg = d3.select('svg')
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  addXandYAxis() {
    console.log(this.gameLog)
    // range of data configuring
    this.x = d3.scaleLinear().range([0, this.width]);
    this.y = d3.scaleLinear().range([this.height, 0]);
    this.x.domain(d3.extent(this.gameLog, (d: any) => d.games_played ));
    this.y.domain(d3.extent(this.gameLog, (d: any) => d.carreer_point ));

   // Configure the Y Axis
   this.svg.append('g')
       .attr('transform', 'translate(0,' + this.height + ')')
       .call(d3.axisBottom(this.x));
   // Configure the Y Axis
   this.svg.append('g')
       .attr('class', 'axis axis--y')
       .call(d3.axisLeft(this.y));
  }

  drawLineAndPath() {
    this.line = d3.line() 
      .x( (d: any) => this.x(d.games_played) )
      .y( (d: any) => this.y(d.carreer_point) );
    // Configuring line path
    this.svg.append('path')
        .datum(this.gameLog)
        .attr('class', 'line')
        .attr('d', this.line)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        
  }

  ngOnInit() {
    this.getGretzkyGamelog()
  }

}
