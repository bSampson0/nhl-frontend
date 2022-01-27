import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { TeamComponent } from './pages/team/team.component';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';
import { PlayerComponent } from './pages/player/player.component';

const routes: Routes = [
  { path: 'team', component: TeamComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'teams/:id', component: TeamDetailComponent},
  { path: 'player/:id', component: PlayerDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
