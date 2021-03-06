import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamComponent } from './pages/team/team.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { PlayerComponent } from './pages/player/player.component';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';
import { PlayerGamelogChartComponent } from './components/player-gamelog-chart/player-gamelog-chart.component';
import { GretzkyComponent } from './components/gretzky/gretzky.component';
import { StandingsComponent } from './components/standings/standings.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    SidenavComponent,
    TeamDetailComponent,
    PlayerComponent,
    PlayerDetailComponent,
    PlayerGamelogChartComponent,
    GretzkyComponent,
    StandingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
