import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [
  {
    path: 'team', component: TeamComponent,
  },
  { path: 'teams/:id', component: TeamDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
